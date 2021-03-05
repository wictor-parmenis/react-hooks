import React, {useState} from 'react'

export default function App (){
    // methods here

    const [subject, setSubject] = useState({
        name: "",
    });

    const [articles, setArticles] = useState([

    ]);

    async function getArticles() {
        const apiKey = '91474bc231824b629200d9975167be98';
        var url = `https://newsapi.org/v2/everything?q=${subject.name}&from=2021-03-05&sortBy=popularity&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        const articlesJson = await data.articles;
        for (var item of articlesJson){
            //console.log(item)
            setArticles([
                    ...articles, item
            ]);            
        };
    };

    function takeNews(e){
        e.preventDefault();
        getArticles();
        for (var article of articles){
            console.log(article);
        };
    };
    
    
    

    return(
        <div>
            <h2>Super News</h2>
            <hr/>
            <br/>
            <form onSubmit={takeNews}>
                 <input placeholder="What about you want know today ?" 
                 onChange={(e) => setSubject({name: e.target.value})}></input><br/>

                 <button type="submit">Search</button>
            </form>
            <hr/>
            {articles.map(article => (
                <section className="article" key={article.title}>
                    {article.title}
                </section>
            ))}
        </div>
    )
}