import './Main.css';
import { v4 as uuid } from 'uuid';
import MediaCardsList from './MediaCardsList';

const data = [
  {
    id: uuid(),
    name: 'Critiano ronaldo',
    description:
      'Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team.',
    rating: 4.5,
  },
  {
    id: uuid(),
    name: 'Lionel Messi',
    description:
      'Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.',
    rating: 4.5,
  },
  {
    id: uuid(),
    name: 'Neymar Jr',
    description:
      'Neymar da Silva Santos Júnior, known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team.',
    rating: 4,
  },
  {
    id: uuid(),
    name: 'Kylian Mbappé',
    description:
      'Kylian Mbappé Lottin is a French professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the France national team.',
    rating: 3,
  },
  {
    id: uuid(),
    name: 'Mohamed Salah',
    description:
      'Mohamed Salah Hamed Mahrous Ghaly is an Egyptian professional footballer who plays as a forward for Premier League club Liverpool and the Egypt national team.',
    rating: 1.5,
  },
];

function Main() {
  return (
    <div className="main">
      <MediaCardsList players={data} />
    </div>
  );
}

export default Main;
