import { LOGOIMAGE } from '@/utils/ways';
import Image from 'next/image';

export default function Logo(){
    return(
        <div className="logo">
            <Image 
                src={LOGOIMAGE}
                alt='Logo'
                width = {410}
                height = {50}
            />
            <h1>Easy Marry!</h1>
        </div>
    )
}