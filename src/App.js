import React, {useState, useEffect} from 'react'

export default function App (){
    // methods here

    const [subject, setSubject] = useState({
        name: "movies",
    });

    const [articles, setArticles] = useState(

    );
    
    // This useEffect work when this component "articles" is updated;
    useEffect(() => {
        getArticles();
        //console.log(articles)
         setTimeout(()=>{document.title = articles;}, 4000);
    }, [setArticles]); 

    async function getArticles() {
        const apiKey = '91474bc231824b629200d9975167be98';
        var url = `https://newsapi.org/v2/everything?q=${subject.name}&from=2021-03-05&sortBy=popularity&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        const articlesJson = await data.articles;
        // console.log(articlesJson);
        setArticles([
            articlesJson
        ]);
        /*for (var item of articlesJson){
            //console.log(item)
            setArticles([
                    ...articles, item
            ]);            
        };*/
    };

    async function takeNews(e){
        e.preventDefault();
        await getArticles();
        console.log(articles)
        
        /*
        var n = 0;
        while (n <= articles.length){
            articles.map(article => {
                console.log(article[n].title)
                console.log(articles.length)
            });
            n += 1;
        }*/

        };
    
    
    return(
        <div>
            <h1 style={{marginLeft: 1 + "em"}}>Super News</h1>
            <br/>
            <br/>
            <form onSubmit={takeNews} style={{marginLeft: 2 + "em"}}>
                 <input placeholder="What about you want know today ?" 
                 onChange={(e) => setSubject({name: e.target.value})}
                 style={{width: 20 + "em", height: 2 + "em"}}></input><br/>
                 <button type="submit">Search</button>
            </form>
            <hr/>
            {articles !== undefined ?  articles.map(article => (
                article.map(realContent => (
                    <section className="article" key={article.title}
                    style={{marginBottom: 2 + "em", margin: "auto", 
                    width: 750 + "px"}}>
                     <h2>{realContent.title}</h2> 
                     <img src={realContent.urlToImage} style={{width: 480 + "px"}}/>
                     <p> {article[1].content} </p>
                     <span> <a href={realContent.url}>Read more</a></span>
                     <hr/> 
                </section>
                
                ))
            )) : 
            <section>
                <p>Loading...</p>
            </section>
            }
        </div>
    )
}