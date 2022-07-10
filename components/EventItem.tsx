import Link from 'next/link'
import Image from 'next/image'
import styles from '@styles/EventItem.module.css'

export default function EventItem({evt} : any) {
  return (
    <div className={styles.event}>
      <div>
        <Image
          src={evt.image ? evt.images : '/images/event-default.png'}
          width={170}
          height={150}
          alt="image"
        />
      </div>
    </div>
  )
}
