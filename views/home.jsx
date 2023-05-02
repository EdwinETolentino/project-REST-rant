const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/victoria-shes-UC0HZdUitWY-unsplash.jpg" alt="Lunch Platter" width="600px" />
                </div>
                    <div>
                    Photo by <a href="AUTHOR_LINK">Victoria Shes</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
