import config from "../config/config";

const today = new Date();
const currentDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

const clearCache = function() {
  localStorage.removeItem('TPY__news')
  localStorage.removeItem('TPY__events')
}

const getNews = async function() {
  const newsFromLocalStorage = JSON.parse(localStorage.getItem('TPY__news')) || { lastUpdate: '' };
  // Return from API
  if(true || newsFromLocalStorage.lastUpDate !== currentDate) {
    const apiResponse = await fetch(`${config.apiUrl}/news`)
    const news = await apiResponse.json()
    // Save in localStorage
    localStorage.setItem('TPY__news', JSON.stringify({
      lastUpDate: currentDate,
      news: news
    }))
    return news;
  }
  // Or directly from localStorage
  // return newsFromLocalStorage.news;
}

const getEvents = async function() {
  const eventsFromLocalStorage = JSON.parse(localStorage.getItem('TPY__events')) || { lastUpdate: '' };
  // Return from API
  if(true || eventsFromLocalStorage.lastUpDate !== currentDate) {
    const apiResponse = await fetch(`${config.apiUrl}/events`)
    const events = await apiResponse.json();
    // Save in localStorage
    localStorage.setItem('TPY__events', JSON.stringify({
      lastUpDate: currentDate,
      events: events
    }))
    return events;
  }
  // Or directly from localStorage
  // return eventsFromLocalStorage.events;
}

const getStories = async function() {
  const storiesFromLocalStorage = JSON.parse(localStorage.getItem('TPY__stories')) || { lastUpdate: '' };
  // Return from API
  if(storiesFromLocalStorage.lastUpDate !== currentDate) {
    const apiResponse = await fetch(`${config.apiUrl}/stories`)
    const stories = await apiResponse.json()
    // Save in localStorage
    localStorage.setItem('TPY__stories', JSON.stringify({
      lastUpDate: currentDate,
      stories: stories
    }))
    return stories;
  }
  // Or directly from localStorage
  // return storiesFromLocalStorage.stories;
}

const getMachines = async function() {
  const machinesFromLocalStorage = JSON.parse(localStorage.getItem('TPY__machines')) || { lastUpdate: '' };
  // Return from API
  if(machinesFromLocalStorage.lastUpDate !== currentDate) {
    const apiResponse = await fetch(`${config.apiUrl}/machines`)
    const machines = await apiResponse.json()
    // Save in localStorage
    localStorage.setItem('TPY__machines', JSON.stringify({
      lastUpDate: currentDate,
      machines: machines
    }))
    return machines;
  }
  // Or directly from localStorage
  return machinesFromLocalStorage.machines;
}

export {
  getEvents,
  getStories,
  getNews,
  getMachines,
}
