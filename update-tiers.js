import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the JSON file
const filePath = path.join(__dirname, 'src', 'app', 'api', 'product', 'data.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Update the first 100 items to have "rare" tier
for (let i = 0; i < 100 && i < data.length; i++) {
  data[i].tier = "rare";
}

// Write the updated data back to the file
fs.writeFileSync(filePath, JSON.stringify(data, null, 4)); 