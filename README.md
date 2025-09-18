# PokeMon Cards List

A React / Vite based application that fetches Pokémon data from the [PokéAPI](https://pokeapi.co/) and displays them as cards.  
Explore Pokémon, view their details, and enjoy a clean UI showing a list of Pokémon.

---

## 🎯 Features

- Fetches a list of Pokémon (limit = 200) from PokéAPI  
- Fetches detailed data for each Pokémon  
- Displays Pokémon cards (name, image, etc.)  
- Loading and error states  
- Responsive layout  

---

## 🛠 Tech Stack

| Purpose | Technology |
|---|---|
| Project setup / build tool | Vite |
| Frontend library | React |
| Styling | CSS |
| Data fetching | Fetch API + async/await |
| State management | React hooks (`useState`, `useEffect`) |

---

## 📦 Installation

To run locally:

```bash
# Clone the repo
git clone https://github.com/AtharvaKailasKadam/PokeMon-Cards-List.git

# Change directory
cd PokeMon-Cards-List

# Install dependencies
npm install
# or
yarn

# Run dev server
npm run dev
# or
yarn dev

```

## 🧪 Usage

Once the dev server is running:

Open your browser and go to http://localhost:5173 (or whichever port Vite gives you)

Watch the app fetch Pokémon data

Scroll through the cards to view all available Pokémon


## ⚠️ Known Issues / To Do

Caching: The favicon / images might be cached—hard refresh if your changes don’t show

Error handling: More user-friendly messages & retry button can be added

Pagination: Right now it fetches 200 at once; maybe implement pagination or lazy-loading

```

## 📁 Project Structure

PokeMon-Cards-List/
├─ public/                # Static assets like favicon, Pokeball image etc.
├─ src/
│   ├─ assets/            # Images (Pokeball etc.)
│   ├─ components/        # React components (e.g. PokemonCard)
│   ├─ App.jsx / main.jsx  # Entry point(s)
│   ├─ Pokemon.jsx         # Main view / logic
│   └─ styles/ or CSS files
├─ .gitignore
├─ package.json
├─ vite.config.js         # Vite configuration
└─ README.md


