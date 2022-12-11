import styles from './Header.module.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { filterEUR, filterUSD } from '../../utils/utils'
import {BiDollar, BiEuro} from 'react-icons/bi'
interface Currency {
    dollar: number;
    euro: number;
};
  
const Header = ({dollar, euro}:Currency)=>{

    return <div className={styles.container}>
        <div className={styles.currency_holder}>
            <div className={styles.ua}>
                1 (USD) = {dollar} (UAH)
            </div>
            <div className={styles.ua}>
                1 (EUR) = {euro} (UAH)
            </div>
        </div>
    </div>
}
export default Header;