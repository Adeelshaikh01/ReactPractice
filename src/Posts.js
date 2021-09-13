var posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "to make a blinded choice to reject or provident to task",
        "body": "because he accepts and receives accepted consequences unencumbered and when he finds annoyance"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "who is to be",
        "body": "it is the time of life to pursue the things that are to be blamed for the pain of a blessed one, nor avoid the pleasures of flattery, nor any further annoyance to reject"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "abuse her as an exercise in who she or she is",
        "body": "and to the just but by which right, blinded by the pleasure of every election, or for the pleasure of the pains or the accusers, who can bear"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "he is blinded",
        "body": "to obtain any pleasure by rejecting one's love and often taking care of things is a fault\nobody is bound by this advantage, they do not know the thing, and pain itself is right\nobody wants that pleasure of things"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "know how to hate",
        "body": "to be rejected is to seek pardon but to be rejected or to shun; let it be but it is pleasure; we can be all pleasures, who is neither bound nor bound by pleasures"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "I open them up for great pain",
        "body": "so that no one will reject the body of these women who provide us with a softness to follow, and no one will find fault with those accusing us of the pains which he desires, and the pain of discomfort"
    },
    {
        "userId": 1,
        "id": 7,
        "title": "great but easy",
        "body": "that pain pleases some people in order of life"
    },
    {
        "userId": 1,
        "id": 8,
        "title": "pain is the actual pain",
        "body": "I will open the pain to those who are worthy of being easily accepted by some of the minds who are able to be able to welcome the great ancestors when there was no such thing as the pain of the pleasures or the mode of life's advantage"
    },
    {
        "userId": 1,
        "id": 9,
        "title": "know the right time and the pain of all the accusers",
        "body": "enhanced minds don't know by the right of pain"
    },
    {
        "userId": 1,
        "id": 10,
        "title": "choice that's annoying for him",
        "body": "in which manner and unencumbered with the duties or great sorrows which must be repudiated, unless there be truly any pardon, which but we accuse the error of the truth"
    },
    {
        "userId": 2,
        "id": 11,
        "title": "and it is for those who praise it",
        "body": "those chosen to reject those who are blinded by annoyances will come to pass, not the least of those who fall into pleasures\n't he be happy, or those who do not enjoy pleasures like the advantageous ones who fall into the nut of the mind"
    },
    {
        "userId": 2,
        "id": 12,
        "title": "at some time hate is pain",
        "body": "so that either the great of the present because it hates them and the pleasure and the intelligent because they love nothing, blinded because that pleasure is the distinction between hatred"
    },
    {
        "userId": 2,
        "id": 13,
        "title": "pain as a fuzzy and often feeling of pleasure",
        "body": "or may we be called softness, the pleasure of convenience, the pleasure of being corrupted by the pain of rejecting the pleasure of the world"
    },
    {
        "userId": 2,
        "id": 14,
        "title": "pleasure of choosing option",
        "body": "flight and accusing us of enduring pains is pleasure and pain, nor do we"
    },
    {
        "userId": 2,
        "id": 15,
        "title": "what will come to pass in time",
        "body": "he finds fault with those whom he pleases, he loves the least duties, and pain prevents the discomfort of repudiating it; for any one chosen to shun the duties of this life must be accepted"
    },
    {
        "userId": 2,
        "id": 16,
        "title": "they are willing to accept and encounter the pains of the real world through the intense hatred",
        "body": "sustains, for unless by which I will open them, or shun the greater pleasures of the nasperical"
    }
  ]
  
  
  
function PostRender() {
    return (
        <div>
            <h1>Posts</h1>
            <ol>
                {posts.map((items) => {
                    return <div key={items.id}>
                        <li >{items.title}</li>
                        <p >{items.body}</p>
                    </div>
                })}
            </ol>
        </div>
    )
  }


export default PostRender;