import {FirstHeader} from '../components/header/header1';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { StatsGrid } from '../components/container/dashstats';
import { AccDrop } from '../components/container/acc-drop';

export default function Home() {
  return (
    <>
      <FirstHeader/>
      <ColorSchemeToggle />
      <StatsGrid/>
      <AccDrop/>
    </>
   
  );
}
