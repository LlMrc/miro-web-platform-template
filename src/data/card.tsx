export interface Card {
  id: string;
  name: string;
  url: string;
  profession: string;
}

const CardList: Card[] = [

  {
    id: "1",
    name: "Louis Marc Leonard",
    url: "https://avatars.githubusercontent.com/u/90993312?s=400&u=bbb9989c4ccb4e0e99d057d0185aafc8d89b9ce5&v=4",
    profession: "Développeur Front-end",
  },
  {
    id: "2",
    name: "Davit Karolína",
    url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profession: "Ingénieur Logiciel",
  },
  {
    id: "3",
    name: "Beatrix Euadne",
    url: "https://images.pexels.com/photos/6954153/pexels-photo-6954153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profession: "Designer UI/UX",
  },
  {
    id: "4",
    name: "Farid Drustan",
    url: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profession: "Administrateur Réseaux",
  },
];

export default CardList;
