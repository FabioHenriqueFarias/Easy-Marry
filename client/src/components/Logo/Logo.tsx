import { LOGOIMAGE } from '@/utils/ways';
import Image from 'next/image';

export default function Logo(){
    return(
        <div className="logo">
            <Image 
                src={LOGOIMAGE}
                alt='Logo'
                width = {300}
                height = {30}
            />
            <h1>Easy Marry!</h1>
        </div>
    )
}