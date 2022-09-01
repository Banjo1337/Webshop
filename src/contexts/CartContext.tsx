import { createContext, useState, ReactNode, useContext } from "react";
import { Product } from "../components/Models";

interface ContextValue {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface Props {
  children: ReactNode;
}

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([  {
    id: "1",
    price: 209,
    title: "Malma Station",
    description:
      "Alex Schulmans nya roman utspelar sig på ett tåg. Fem personer är på resa genom Sverige: ett gift par i kris, en ensamstående far och hans dotter, och en kvinna som söker svaret på en gåta som hennes mamma lämnat efter sig. De reser alla mot Malma station och varken de eller läsaren vet hur deras öden hänger samman, eller anar att det som händer på slutdestinationen kommer att omdefiniera deras liv. Malma station är en drabbande berättelse om familjehemligheter och oförrätter som gått i arv genom generationer  och jakten på sanningen som kan förändra allt.",
    image: "https://s1.adlibris.com/images/63140428/malma-station.jpg",
    author: "Alex Schulman",
    category: "Roman",
  },
  {
    id: "2",
    price: 219,
    title: "Stjärnfall",
    description:
      "Louise Boije af Gennäs är tillbaka med en fristående fortsättning på Stjärnor utan svindel  25 år senare! Julia och Gabriel lever ett tätt sammanflätat liv med sina nära vänner Eva och André. Deras gemensamma barn har vuxit upp nästan som syskon, de äter middagar tillsammans, firar högtider och är gudföräldrar åt varandras barn. Men plötsligt förändras allt. Julia och André inser att de har starka känslor för varandra och tvingas ställa sig frågan om de är villiga att offra allt för kärleken.",
    image: "https://s2.adlibris.com/images/63025162/stjarnfall.jpg",
    author: "Louise Boije af Gennäs",
    category: "Roman",
  },
  {
    id: "3",
    price: 199,
    title: "SIGNERAD X",
    description:
      "Sport- och spelindustrin exploderar, men bortom onlinebettingen finns en underjordisk marknad där de stora transaktionerna sker genom matchfixning, våld och korruption. En mördad fotbollsfru i en lyxvilla på Lidingö. En pojke i förorten med en framtid som idrottsstjärna. En utstött mellanstadielärare som drömmer om att bli sedd för den hon är. I den senaste delen i serien om Vanessa Frank vävs deras historier samman till ett fartfyllt drama och en omöjlig ekvation. Nu måste polisinspektör Vanessa Frank hitta den okända variabeln X innan det är för sent.",
    image: "https://s2.adlibris.com/images/63926849/signerad-x.jpg",
    author: "Pascal Engman",
    category: "Deckare",
  },
  {
    id: "4",
    price: 189,
    title: "Bokälskare",
    description:
      "Hela Nora Stephens liv består av böcker. Som litterär agent i New York gör hon allt för sina författare, men också för sin älskade lillasyster Libby. Så när Libby ber Nora följa med till den idylliska småstaden Sunshine Falls i North Carolina ställer hon upp, om än motvilligt. Planen är att de ska ha en avkopplande systersemester tillsammans, samtidigt som Libby i hemlighet hoppas att Nora ska bli hjälte i sitt eget liv och inte bara i andras. Men i stället för picknickar i mysiga gläntor och heta möten med någon sexig skogshuggare eller snygg landsortsläkare, springer Nora ideligen på Charlie Lastra, en butter förläggare som också kommer från New York. Det skulle kanske ha kunnat bli gulligt och romantiskt, om det inte vore för det faktum att Nora och Charlie redan har träffats massor av gånger hemma i stan, och det har aldrig varit det minsta gulligt.",
    image: "https://s2.adlibris.com/images/62596140/bokalskare.jpg",
    author: "Emily Henry",
    category: "Roman",
  },]);

  const addToCart = (product: Product) => {
    //TODO
  };
  const removeFromCart = (product: Product) => {
    //TODO
    console.log(product)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
