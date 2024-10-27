import Head from 'next/head'
import SmileyAIBottomNav from '../../components/Common/BottomNav'
import SmileyAINavbar from '../../components/Common/SmileyAINav'
import DareContent from '../../components/DareMsg/DareContent'
import DareSlider from '../../components/DareMsg/DareSlider'

const DareGames = () => {
    return <main className='bg-gray-100'>
        <Head>
            <title>Play Friendship Dare Games Online | Share Fun Dares on WhatsApp & Social Media</title>
            <meta
                name="description"
                content="Discover exciting friendship dare games to play with friends! Create and share dares on WhatsApp or social media to challenge and bond with your friends. Start playing now!"
                key="desc"
            />
        </Head>
        <SmileyAINavbar title="- Dares" />
        <DareSlider />
        <DareContent />
        <SmileyAIBottomNav />
    </main>
}

export default DareGames