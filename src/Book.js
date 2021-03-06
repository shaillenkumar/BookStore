import React, { Component } from "react";
import { Row, Card,Button } from "react-bootstrap";


class Book extends Component{
    state = {
        bookList:[
            {
                "genre":"Fiction",
                "bookTitle":"The Invisible Man",
                "author":"H.G.Well",
                "bookImg":"./images/fiction/0.jpg",
                "description":"Having devoted his studies to optics and refraction, an impulsive scientist named Griffin has rendered himself invisible. Unable to reverse the effects, his struggle to survive grows desperate until he realizes that there are benefits to living out of the public eye. Increasingly isolated, he soon spirals into a life of crime and degenerates into madness. He can’t see that he has become his own worst enemy.Exploring the loss of identity and the willful disappearance of conscience and morality, H. G. Wells crafted one of his most suspenseful and cautionary tales, which continues to intrigue to this day."
            },
            {
                "genre":"Fiction",
                "author":"Jules Verne",
                "bookTitle":"Journey to the Center of the Earth",
                "bookImg":"./images/fiction/1.jpg",
                "description":"A sixteenth-century cryptogram spurs modern geologist Otto Liedenbrock to embark on the most remarkable human quest ever taken. With his nephew and guide, he leads the descent from a dormant Icelandic volcano into the unexplored realm beneath their feet. There, a vast subterranean ocean, prehistoric creatures, and natural phenomena are but a few of the wonders hidden from all but the boldest eyes." 
            },
            {
                "genre":"Fiction",
                "author":"Stephen Hawking",
                "bookTitle":"The Theory Of Everything",
                "bookImg":"./images/fiction/2.jpg",
                "description":"Hawking begins with a history of ideas about the universe, from Aristotle’s determination that the Earth is round to Hubble’s discovery, over 2000 years later, that the universe is expanding. Using that as a launching pad, he explores the reaches of modern physics, including theories on the origin of the universe (e.g., the big bang), the nature of black holes, and spacetime."      },
            {
                "genre":"Fiction",
                "author":"Stephen Hawking",
                "bookTitle":"A Brief History Of Time",
                "bookImg":"./images/fiction/3.jpg",
                "description":"In A Brief History of Time, Hawking writes in non-technical terms about the structure, origin, development and eventual fate of the Universe, which is the object of study of astronomy and modern physics. He talks about basic concepts like space and time, basic building blocks that make up the Universe (such as quarks) and the fundamental forces that govern it (such as gravity). He writes about cosmological phenomena such as the Big Bang and black holes. He discusses two major theories, general relativity and quantum mechanics, that modern scientists use to describe the Universe. Finally, he talks about the search for a unifying theory that describes everything in the Universe in a coherent manner."
            },
            {
                "genre":"Fiction",
                "author":"Yuval Noah Harari",
                "bookTitle":"Homo Deus, The History Of Tomorrow",
                "bookImg":"./images/fiction/4.jpg",
                "description":"A Brief History of Tomorrow examines what might happen to the world when old myths are coupled with new godlike technologies, such as artificial intelligence and genetic engineering."
            },
            {
                "genre":"Novel",
                "author":"Harper Lee",
                "bookTitle":"To Kill a MockingBird",
                "bookImg":"./images/novel/0.jpg",
                "description": "The story, told by the six-year-old Jean Louise Finch, takes place during three years (1933–35) of the Great Depression in the fictional -tired old town- of Maycomb Alabama the seat of Maycomb County. Jean Louise Finch, nicknamed Scout, lives with her older brother Jeremy, nicknamed Jem, and their widowed father Atticus, a middle-aged lawyer. Jem and Scout befriend a boy named Dill who visits Maycomb to stay with his aunt each summer. " 
             },
            {
                "genre":"Novel",
                "author":"GEORGE ORWELL",
                "bookTitle":"Nineteen Eighty Four, 1984",
                "bookImg":"./images/novel/1.jpg",
                "description":"In the year 1984, civilisation has been damaged by war, civil conflict, and revolution. Airstrip One (formerly known as Great Britain) is a province of Oceania, one of the three totalitarian super-states that rule the world. "
            },
            {
                "genre":"Novel",
                "author":"Jane Austen ",
                "bookTitle":"Pride and Prejudice",
                "bookImg":"./images/novel/2.jpg",
                "description":"The novel is set in rural England in the early 19th century. Mrs Bennet attempts to persuade Mr Bennet to visit Mr Bingley, a rich bachelor recently arrived in the neighbourhood."
            },
            {
                "genre":"Children",
                "author":"E.B. White ",
                "bookTitle":"Charlottes Web",
                "bookImg":"./images/children/0.jpg",
                "description":"After a little girl named Fern Arable pleads for the life of the runt of a litter of piglets, one spring morning, her father gives her the pig to nurture, and she names him Wilbur. "
            },
            {
                "genre":"Children",
                "author":"Roald Dahl",
                "bookTitle":"Charlie and the Chocolate Factory",
                "bookImg":"./images/children/1.jpg",
                "description":"Charlie and the Chocolate Factory is a 1964 children novel by British author Roald Dahl. The story features the adventures of young Charlie Bucket inside the chocolate factory of eccentric chocolatier"
            },
            {
                "genre":"Children",
                "author":"J. R. R. Tolkien ",
                "bookTitle":"The Hobbit",
                "bookImg":"./images/children/2.jpg",
                "description":"The Hobbit, or There and Back Again is a children fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction"
            },
            {
                "genre":"Children",
                "author":"Kenneth Grahame",
                "bookTitle":"The Wind in the Willows",
                "bookImg":"./images/children/3.jpg",
                "description":"The Wind in the Willows is a children novel by Scottish novelist Kenneth Grahame, first published in 1908. Alternatingly slow-moving and fast-paced, it focuses on four anthropomorphised animals: Mole, Rat, Toad, and Badger."
            },
            {
                "genre":"Classical",
                "author":"Charles Dickens",
                "bookTitle":"Great Expectations",
                "bookImg":"./images/classical/0.jpg",
                "description":"Great Expectations is the thirteenth novel by Charles Dickens and his penultimate completed novel, which depicts the education of an orphan nicknamed Pip."
            },
            {
                "genre":"Classical",
                "author":"William Shakespeare",
                "bookTitle":"Hamlet",
                "bookImg":"./images/classical/1.jpg",
                "description":"The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare longest play with 30,557 words."
            },
            {
                "genre":"Classical",
                "author":"William Shakespeare",
                "bookTitle":"Merchant of Venice",
                "bookImg":"./images/classical/2.jpg",
                "description":"The Merchant of Venice is a 16th-century play written by William Shakespeare in which a merchant in Venice named Antonio defaults on a large loan provided by a Jewish moneylender, Shylock."
            }



        ]
    }
    constructor(props){
        super(props);
    }

    render(){
           
           const booksCatalog = 
           (this.state.bookList.filter((book)=>{
                return (this.props.category == book.genre)
           })).map((book, indx)=>{
               return(
                   <Row key={indx} style={{ margin: "2.1em 0.8em 0.8em"}}>
                        <Card style={{ padding:"10px",margin: "2.1em 0.8em 0.8em", alignItems: "center" }}>
                        <img src={book.bookImg} style={{margin: "5px,1px,1px","width":"500px","height":"500px"}} />
                        <Card.Body>
                            <h1>{book.bookTitle}</h1>
                            <Card.Subtitle className="mb-1 text-muted">{book.author}</Card.Subtitle>
                            <Card.Text>{book.description}</Card.Text>
                            <Button variant="primary">Buy!</Button>
                        </Card.Body>
                        </Card>
                    </Row>
               )
           })       

        return(

            <div>{booksCatalog}</div>
        )
    }
}

export default Book;