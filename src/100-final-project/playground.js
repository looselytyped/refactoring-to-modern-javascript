import fs from 'fs';

const db = JSON.parse(fs.readFileSync('data/db.json'));

const categories = db.categories;
const subCategories = db.subCategories;
const expenses = db.expenses;

