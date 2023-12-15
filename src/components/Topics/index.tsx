import styled from "styled-components"
import Theme from "../../theme"
import CardComponents from "./Card/Card"
import { useState } from "react"


const Title = styled.h1`
    font-family: 'Lora', serif;
    font-size: 18px;
    font-weight: bold;
    color: ${Theme.grey};

`

const ContainerTopics = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
`

const ButtonFilter = styled.button<{ selected: boolean }>`
    font-family: 'Lora', serif;
    font-size: 9px;
    font-weight: bold;
    color: ${props => (props.selected ? 'red' : '#495057')};
    line-height: 25px;
    text-decoration: none;
    border: 1px solid ${Theme.background};
    border-radius: 8px;
    width: 60px;
    padding: 4px;
    text-align: center;
    cursor: pointer;
`

const LinkTopics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 70px;
  font-family: 'Lora', serif;
  font-size: 10px;
  font-weight: bold;
  color: ${Theme.grey};
  line-height: 25px;
`

const Div = styled.div`
  display: flex;
  gap: 15px;
`

const Card = styled.div`
    width: 100%;
    max-width: 365px;
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 30px 40px;
    position: relative;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`

const CardsData = [
  {
    id: 1,
    categoria: 'Terror',
    imageSrc: require("../../assets/Card/card1.svg").default,
    date: '08.08.2021',
    title: 'Bonecas Novas',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    profileTitle: 'By Jennifer Lawrence',
    profileContent: 'Thinker & Designer'
  },
  {
    id: 2,
    categoria: 'Terror',
    imageSrc: require("../../assets/Card/card2.svg").default,
    date: '08.08.2021',
    title: 'Bonecas Novas',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    profileTitle: 'By Jennifer Lawrence',
    profileContent: 'Thinker & Designer'
  },
  {
    id: 3,
    categoria: 'Comédia',
    imageSrc: require("../../assets/Card/card3.svg").default,
    date: '08.08.2021',
    title: 'Bonecas Novas',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    profileTitle: 'By Jennifer Lawrence',
    profileContent: 'Thinker & Designer'
  },
  {
    id: 4,
    categoria: 'Comédia',
    imageSrc: require("../../assets/Card/card4.svg").default,
    date: '08.08.2021',
    title: 'Bonecas Novas',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    profileTitle: 'By Jennifer Lawrence',
    profileContent: 'Thinker & Designer'
  },
  {
    id: 5,
    categoria: 'Ação',
    imageSrc: require("../../assets/Card/card5.svg").default,
    date: '08.08.2021',
    title: 'Bonecas Novas',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    profileTitle: 'By Jennifer Lawrence',
    profileContent: 'Thinker & Designer'
  },
  {
    id: 6,
    categoria: 'Ação',
    imageSrc: require("../../assets/Card/card6.svg").default,
    date: '08.08.2021',
    title: 'Bonecas Novas',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    profileTitle: 'By Jennifer Lawrence',
    profileContent: 'Thinker & Designer'
  },
  {
    id: 7,
    categoria: 'Ação',
    imageSrc: require("../../assets/Card/card7.svg").default,
    date: '08.08.2021',
    title: 'Bonecas Novas',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    profileTitle: 'By Jennifer Lawrence',
    profileContent: 'Thinker & Designer'
  },
  {
    id: 8,
    categoria: 'Aventura',
    imageSrc: require("../../assets/Card/card8.svg").default,
    date: '08.08.2021',
    title: 'Bonecas Novas',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    profileTitle: 'By Jennifer Lawrence',
    profileContent: 'Thinker & Designer'
  },

]

const Topics = () => {

  const [selectedCategory, setSelectedCategory] = useState('Aventura');

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };


  return (
    <ContainerTopics>
      <Title>Popular topics</Title>
      <LinkTopics>
        <Div>
          <ButtonFilter selected={selectedCategory === 'todas'} onClick={() => handleFilterClick('todas')}>All</ButtonFilter>
          <ButtonFilter selected={selectedCategory === 'Ação'} onClick={() => handleFilterClick('Ação')}>Adventure</ButtonFilter>
          <ButtonFilter selected={selectedCategory === 'Aventura'} onClick={() => handleFilterClick('Aventura')}>Horror</ButtonFilter>
          <ButtonFilter selected={selectedCategory === 'Comédia'} onClick={() => handleFilterClick('Comédia')}>Comérida</ButtonFilter>
          <ButtonFilter selected={selectedCategory === 'Terror'} onClick={() => handleFilterClick('Terror')}>Terror</ButtonFilter>
        </Div>
       
      </LinkTopics>

      <Card>
        {CardsData.filter(card => selectedCategory === 'todas' || card.categoria === selectedCategory)
          .map(Card => (
            <CardComponents
              key={Card.id}
              imageSrc={Card.imageSrc}
              categoria={Card.categoria}
              date={Card.date}
              title={Card.title}
              paragrafo={Card.paragrafo}
              profileTitle={Card.profileTitle}
              profileContent={Card.profileContent}
            />
          ))}
      </Card>
    </ContainerTopics>
  )
}

export default Topics

