import '../App.css'
import Navbar from '../components/navbar'
import SearchBar from '../components/searchBar'
import Calendar from '../components/calendar.tsx';
import {Firestore, query, getDocs, collection} from "firebase/firestore";
//import { Firestore, collection, getDocs} from "firebase/firestore";
import {db} from "../firebase.ts";
//import { Sat_calendar } from '../demoData.tsx';
//import { Sun_calendar } from '../demoData.tsx';
import type { calendar } from '../types/calendar.ts';

export async function getSatWorkshops(db: Firestore, sat: string){
  const satWkshpsRef = query(collection(db, sat));
  const satWkshpsSnapshot = await getDocs(satWkshpsRef);
  const satWkshpsList = satWkshpsSnapshot.docs.map(doc => doc.data());
  return satWkshpsList;
  //return satWkshpsSnapshot;
  //return satWkshpsRef;
  //const docRef = doc(db, `/${sat}/jTroMVnwQL0j1F8BhWmc`);
  // const docSnap = await getDocs(collection(db, sat));
  // return docSnap;
}

export async function getSunWorkshops(db: Firestore, sun: string){
  const sunWkshpsRef = collection(db, sun);
  const sunWkshpsSnapshot = await getDocs(sunWkshpsRef);
  const sunWkshpsList = sunWkshpsSnapshot.docs.map(doc => doc.data());
  return sunWkshpsList;
}

const SatList = await getSatWorkshops(db, "satWorkshops");
const SunList = await getSunWorkshops(db, "sunWorkshops");

console.log(SatList);
const Sat_calendar: calendar = {
  day: "Saturday",
  workshops: SatList
}

const Sun_calendar: calendar = {
  day: "Sunday",
  workshops: SunList
}

const FullSchedule = () => {
  
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="schedule">
        <div className='dayOne'>
          <Calendar day={Sat_calendar.day} workshops={Sat_calendar.workshops}/>
        </div>

        <div className="dayTwo">
          <Calendar day={Sun_calendar.day} workshops={Sun_calendar.workshops}/>
        </div>
      </div>
    </>
  )
}

export default FullSchedule