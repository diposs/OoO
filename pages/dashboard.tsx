import {FirstHeader} from '../components/header/header1';
import { StatsGrid } from '../components/container/dashstats';
import { AccDrop } from '../components/container/acc-drop';

export default function Home() {
  return (
    <>
      <FirstHeader/>
      <StatsGrid/>
      <AccDrop/>
    </>
   
  );
}
