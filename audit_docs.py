import os
import re

CONTENT_DIR = r"e:\chain\brixs-docs-custom\src\content"

replacements = [
    # Network / Deployment status
    (r"(?i)mainnet live", "Testnet Live"),
    (r"Mainnet", "Testnet"),
    (r"mainnet", "testnet"),
    (r"https://rpc\.brixs\.network", "http://localhost:8545"),
    
    # CLI
    (r"ncli init --network testnet --data-dir /var/lib/brixs", "brixs deploy"),
    (r"ncli ", "brixs "),
    
    # Architecture Buzzwords
    (r"(?i)Layer 1 blockchain", "Zero-Gas Layer 2 Rollup"),
    (r"Layer 1", "Layer 2"),
    (r"multi-threaded Rust VM", "JavaScript/Node.js EVM-compatible node"),
    (r"Rust VM", "EVM Node"),
    (r"BrixsBFT", "Brixs Sequencer"),
    (r"Absolute Finality", "Instant Rollup Finality"),
    (r"DAG-based", "Rollup-based"),
    (r"Absolute Finality consensus", "Rollup transaction sequencing"),
]

def audit_files():
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            if file.endswith(".mdx") or file.endswith(".md"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    # Use re.sub for regex patterns
                    new_content = re.sub(old, new, new_content)
                
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {file_path}")

if __name__ == "__main__":
    audit_files()
    print("Audit complete.")
