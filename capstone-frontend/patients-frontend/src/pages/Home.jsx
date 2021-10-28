import React, { useState, useEffect } from "react";

function Home() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=healthcare&api-key=R1TXnnhC1RCjImnOGRvW9RS4QpkVVO3v`)

                const articles = await res.json()
                console.log(articles.response.docs);
                setArticles(articles.response.docs)
            } catch (error) {
                console.error(error);
            }
        }
        fetchArticles()
    }, [])


    return (
        <>
            <div className="banner mb-3">
                <h2 className="text-center display-4 fw-bold align-content-center ">HealthCare News</h2>
            </div>
            {articles.map((article) => {
                const { abstract, headline: { main }, byline: { original }, lead_paragraph, web_url, _id } = article

                return (
                    <div className="row">
                        <div className="col-sm">
                            <div className="card mb-2">
                                <div className="card-body m-4">
                                    <article key={_id}>
                                        <h2 className="card-title text-uppercase font-weight-bold">{main}</h2>
                                        <h4 className="card-subtitle mb-2 text-muted">{abstract}</h4>
                                        <p className="card-text">{lead_paragraph}</p>
                                        <ul>
                                            <li>{original}</li>

                                        </ul>
                                        <a className="card-link" href={web_url}>Web Resource</a>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Home;