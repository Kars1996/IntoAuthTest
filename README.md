Silly little repository that I'll use in a template/website soon


## Quickstarting using create-kapp

```bash
npm i create-kapp@latest -g
```

then run the create-kapp command to initialise this template.

```bash
create-kapp
```

You'll be promoted with this:

```bash
? Setup the project in...? »
# Use "." or "./" for the local folder.
# Use a foldername to setup the project in that folder. (It will be created if it doesn't exist)
```

## Cloning

To initialise this template, choose one of the following options:

### Option 1: Folder already exists

```bash
gh repo clone kars1996/Template .
```

### Option 2: Folder does not exist

```bash
gh repo clone kars1996/Template <folder-name>
# the folder name is optional
```

### Option 3: Forking

```bash
gh repo fork kars1996/Template
```

## Getting Started

Firstly install the dependencies:

```bash
npm i
# or
yarn
# or
pnpm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
