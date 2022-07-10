import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout';
import {API_URL} from "@config/index"

const Home = ({events} : any) => {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((event : any) => (
        <h3 key={event.id}>{event.name}</h3>
      ))}
    </Layout>
  )
}

export async function getStaticProps(params : any) {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  console.log(events)

  return {
    props : {events},
    revalidate : 1
  }
}

export default Home;