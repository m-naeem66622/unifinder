import React from 'react'

function About() {
  return (
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-6">
          <h1>About UniFinder</h1>
          <p class="lead">
            UniFinder is a powerful tool for searching and retrieving information about universities around the world. With this app, users can easily search for universities by name or country and retrieve detailed information about them, all thanks to the underlying <a className='text-warning' href="https://github.com/Hipo/university-domains-list" target='_blank'>University Search API</a> that powers this app.
          </p>
          <h2>Features</h2>
          <ul>
            <li>Search for universities by name or country</li>
            <li>Get detailed information about universities, including name, country, website, address, phone number, and more</li>
            <li>Filter search results by location, academic program, and other criteria</li>
            <li>Sort search results by relevance, name, ranking, or other factors</li>
            <li>Get autocompleted suggestions as you type</li>
            <li>Easy-to-use interface for searching universities</li>
          </ul>
          <h2>How it works</h2>
          <p>
            UniFinder is a front-end application built on top of the <a className='text-warning' href="https://github.com/Hipo/university-domains-list" target='_blank'>University Search API</a>, which provides a comprehensive database of universities worldwide. To use this app, users can simply enter the name or country of the university they are looking for and hit the search button. The app then sends an HTTP request to the <a className='text-warning' href="https://github.com/Hipo/university-domains-list" target='_blank'>University Search API</a> and retrieves the matching university data in JSON format. The app then displays this data to the user in a clean and easy-to-use interface.
          </p>
          <p>
            The search functionality of UniFinder allows users to filter search results by location, academic program, and other criteria. The app supports sorting search results by relevance, name, ranking, and other factors. Additionally, users can get autocompleted suggestions as they type, making it easy to find the university they are looking for.
          </p>
        </div>
        <div class="col-lg-6 d-flex justify-content-center align-items-center">
          <img src="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=1" alt="University Image" class="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default About