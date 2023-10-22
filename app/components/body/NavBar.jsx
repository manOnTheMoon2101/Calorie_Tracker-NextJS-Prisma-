import Link from "next/link";
import styles from '../../page.module.css'
import {LiaAppleAltSolid} from 'react-icons/lia';
import {BsGraphDown} from 'react-icons/bs';
import {GoNumber} from 'react-icons/go';

export default function NavBar() {
  return (
  <>
 
 
    <div className={styles.navBar}>
    <ul>
        <li><Link href='/'>Nutrients<LiaAppleAltSolid/></Link></li>
        <li><Link href='/calories'>Calories<GoNumber/></Link></li>
        <li><Link href='/graphs'>Weight Graph<BsGraphDown/></Link></li>
    </ul>
    </div>

    </>
  )
}
