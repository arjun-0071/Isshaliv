const fs = require('fs');
const path = require('path');

const cssDir = 'c:/Users/emera/Downloads/Isshaliv/webapp/src/components';
const indexCss = 'c:/Users/emera/Downloads/Isshaliv/webapp/src/index.css';

// 1. Add variable to index.css
let indexContent = fs.readFileSync(indexCss, 'utf8');
if (!indexContent.includes('--card-bg')) {
  indexContent = indexContent.replace(
    /--bg-color: #f2ebe1;/,
    '--bg-color: #f2ebe1;\n  --card-bg: rgba(255, 255, 255, 0.35);\n  --card-border: rgba(255, 255, 255, 0.4);'
  );
  fs.writeFileSync(indexCss, indexContent);
}

// 2. Replace white backgrounds
const filesToUpdate = [
  'WhyIsshaliv.css',
  'WhenToUse.css',
  'Usage.css',
  'HowItWorks.css',
  'Composition.css'
];

for (const file of filesToUpdate) {
  const filePath = path.join(cssDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/background:\s*white;/g, 'background: var(--card-bg);\n  backdrop-filter: blur(12px);');
  content = content.replace(/background-color:\s*white;/g, 'background-color: var(--card-bg);\n  backdrop-filter: blur(12px);');
  content = content.replace(/background:\s*#ffffff;/g, 'background: var(--card-bg);\n  backdrop-filter: blur(12px);');
  content = content.replace(/background-color:\s*#ffffff;/g, 'background-color: var(--card-bg);\n  backdrop-filter: blur(12px);');
  
  fs.writeFileSync(filePath, content);
}
console.log('Cards updated successfully.');
