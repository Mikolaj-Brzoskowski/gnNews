# gnNews
React project made for simple display of news from https://newsapi.org. It contains news from all countries available from API (country can be chosen from sidemenu). News can be displayed in a form of list or in a cards display. Site can be displayed in either English or Polish language.

# Configuration
For API to work you need to provide API key from https://newsapi.org in .env file.
It should be created in root directory and key variable should me named **REACT_APP_API_KEY**

## Functionality
- Pages with routing (using react-router-dom)
- Country sidemenu list
- List/cards display button
- News that upon a click display aditional info (e.g. link to source of a news)
- Footer with news counter and time display

# Used for this project
- React
- Redux
- Bootstrap
- Axios
- i18next
- React Router Dom
- React Icons

# Link to hosted production build
**Note: Newsapi.org free key option doesn't support public domains - thats why news WON'T be displayed in the below link**  
[gnNews-app](https://mikolaj-brzoskowski.github.io/gnNews/)
