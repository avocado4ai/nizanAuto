import json
import csv
import os
import re
from typing import Dict, List, Any

def create_default_config():
    config_template = '''
interface SiteConfig {
    siteName: string;
    legalName: string;
    siteDescription: string;
    siteTagline: string;
    siteUrl: string;
    logo: {
        main: string;
        alttxt: string;
        alternate: string;
        mainalt: string;
    };
    contactinfo: {
        email: string;
        other_email: string;
        phone: string;
        whatsapp: string;
        address: string;
        workingHours: {
            days: string;
            hours: string;
        };
        formSubject: string;
        formConfirmationMessage: string;
    };
    contact: {
        title: string;
        description: string;
        subtitle: string;
        buttonText: string;
        contacttitle: string;
        addresstitle: string;
        phonetitle: string;
        mailtitle: string;
        picture: string;
        picturealt: string;
        form: Array<{
            label: string;
            type: string;
            name: string;
            placeholder: string;
            required: boolean;
        }>;
    };
    company: {
        techSupplierIds: Array<{
            id: string;
            description: string;
        }>;
        foundedYear: number;
        completedProjects: string;
        completedlable: string;
        experienceYears: string;
        experiencelable: string;
    };
    navigation: Array<{
        name: string;
        href: string;
    }>;
    hero: {
        title: string;
        subtitle: string;
        subtitleAdd: string;
        text: string;
        blocktitle: string;
        blocktext: Array<{
            text: string;
        }>;
    };
    about: {
        title: string;
        pertitle: string;
        paragraphs: string[];
        youtubeurl: string;
        youtubealt: string;
        videotitle: string;
        videoenabled: boolean;
        aboutimage: string;
        imagealt: string;
    };
    footer: {
        logo: string;
        alttxt: string;
        title: string;
        description: string;
    };
    clients: {
        clienttitle: string;
        clientlist: Array<{
            name: string;
        }>;
    };
    accessibility: {
        enabled: boolean;
        toolbar: {
            position: string;
            skipContentText: string;
            title: string;
            tools: Array<{
                name: string;
                title: string;
            }>;
            focusable: boolean;
            removeTargetFromLinks: boolean;
            addRoleToLinks: boolean;
            savePreferences: boolean;
            saveExpiration: number;
        };
    };
    social: {
        youtube: {
            logourl: string;
            url: string;
            channelName: string;
        };
        twitter: {
            logourl: string;
            handle: string;
            url: string;
        };
        facebook: {
            logourl: string;
            url: string;
        };
        linkedin: {
            logourl: string;
            url: string;
        };
        instagram: {
            logourl: string;
            url: string;
        };
        whatsupp: {
            logourl: string;
            url: string;
        };
    };
}

export const siteConfig: SiteConfig = {
    // Default values matching the current configuration
    siteName: "ניצן קול בע״מ",
    legalName: "ניצן קול בע\"מ",
    // ...rest of the default values
};

// ...existing code for other configs...
'''
    try:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        config_path = os.path.join(script_dir, 'siteConfig.ts')
        with open(config_path, 'w', encoding='utf-8') as f:
            f.write(config_template)
        return True
    except Exception as e:
        print(f"Error creating config file: {e}")
        return False

def parse_typescript_config(file_path: str) -> Dict[str, Any]:
    """Parse TypeScript config file and extract configuration objects"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract exported const objects using regex
        pattern = r'export\s+const\s+(\w+)\s*=\s*({[^;]+});'
        matches = re.finditer(pattern, content)
        
        config = {}
        for match in matches:
            var_name = match.group(1)
            var_content = match.group(2)
            # Convert TypeScript object to Python dict
            try:
                # Replace TypeScript syntax with valid JSON
                json_str = re.sub(r'(\w+):', r'"\1":', var_content)
                json_str = re.sub(r',\s*}', '}', json_str)  # Remove trailing commas
                config[var_name] = json.loads(json_str)
            except json.JSONDecodeError as e:
                print(f"Error parsing {var_name}: {e}")
                config[var_name] = {}
                
        return config
    except Exception as e:
        print(f"Error reading TypeScript config: {e}")
        return {}

try:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.join(script_dir, 'siteConfig.ts')
    
    if not os.path.exists(config_path):
        print("Error: siteConfig.ts not found. Creating new file with default values...")
        if create_default_config():
            print("Created siteConfig.ts with default values. Please edit the file with your configuration.")
        else:
            raise ImportError("Failed to create siteConfig.ts")
    
    # Parse TypeScript config file
    config = parse_typescript_config(config_path)
    siteConfig = config.get('siteConfig', {})
    servicesConfig = config.get('servicesConfig', {})
    testimonialsConfig = config.get('testimonialsConfig', {})
    faqConfig = config.get('faqConfig', {})
    backgroundImages = config.get('backgroundImages', {})

def flatten_complex_value(value: Any, current_path: str) -> List[Dict[str, str]]:
    fields = []
    
    if value is None:
        return fields
        
    try:
        if isinstance(value, str):
            if value.strip():  # Only add non-empty strings
                fields.append({
                    'item_path': current_path,
                    'item_text': value,
                    'editable': 'yes'
                })
        elif isinstance(value, (int, float)):
            fields.append({
                'item_path': current_path,
                'item_text': str(value),
                'editable': 'yes'
            })
        elif isinstance(value, dict):
            fields.extend(extract_text_fields(value, current_path))
        elif isinstance(value, list):
            for i, item in enumerate(value):
                if item is not None:  # Skip None values in lists
                    fields.extend(flatten_complex_value(item, f"{current_path}[{i}]"))
        else:
            print(f"Warning: Unsupported type {type(value)} at {current_path}")
    except Exception as e:
        print(f"Error processing {current_path}: {str(e)}")
    
    return fields

def extract_text_fields(data: Dict[str, Any], prefix: str = '') -> List[Dict[str, str]]:
    fields = []
    
    if not isinstance(data, dict):
        print(f"Warning: Expected dict at {prefix}, got {type(data)}")
        return fields
        
    for key, value in data.items():
        if not isinstance(key, str):
            print(f"Warning: Non-string key {key} at {prefix}")
            continue
            
        current_path = f"{prefix}.{key}" if prefix else key
        current_path = current_path.replace('..', '.')  # Fix double dots
        fields.extend(flatten_complex_value(value, current_path))
    
    return fields

def read_translations(csv_path: str) -> Dict[str, str]:
    translations = {}
    try:
        with open(csv_path, 'r', encoding='utf-8', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                translations[row['item_path']] = row['item_text']
    except FileNotFoundError:
        print(f"Warning: {csv_path} not found. Creating new file.")
    return translations

def update_translations(csv_path: str, new_translations: Dict[str, str]):
    existing = read_translations(csv_path)
    existing.update(new_translations)
    
    with open(csv_path, 'w', encoding='utf-8', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=['item_path', 'item_text', 'editable'])
        writer.writeheader()
        for path, text in sorted(existing.items()):
            writer.writerow({
                'item_path': path,
                'item_text': text,
                'editable': 'yes'
            })

def validate_translations(translations: Dict[str, str]) -> List[str]:
    errors = []
    for path, text in translations.items():
        if not text:
            errors.append(f"Empty translation for {path}")
        if len(text) > 1000:  # Maximum length check
            errors.append(f"Translation too long for {path}")
    return errors

def main():
    csv_path = 'translations.csv'
    
    # Process all configurations
    config_data = {
        "siteConfig": siteConfig,
        "servicesConfig": servicesConfig,
        "testimonialsConfig": testimonialsConfig,
        "faqConfig": faqConfig,
        "backgroundImages": backgroundImages
    }
    
    all_fields = extract_text_fields(config_data)
    
    # Convert to dictionary format
    translations = {
        field['item_path']: field['item_text'] 
        for field in all_fields
    }
    
    # Validate translations
    errors = validate_translations(translations)
    if errors:
        print("Validation errors found:")
        for error in errors:
            print(f"- {error}")
        return
    
    # Update CSV file
    update_translations(csv_path, translations)
    print(f"Successfully updated {csv_path}")
    print(f"Total entries: {len(translations)}")

if __name__ == "__main__":
    main()