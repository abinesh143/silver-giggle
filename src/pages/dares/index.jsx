import DareContent from '../../components/DareMsg/DareContent'
import DareNavbar from '../../components/DareMsg/DareNav'
import DareSlider from '../../components/DareMsg/DareSlider'
import Footer from '../../components/Footer'

const DareGames = () => {
    return <main className='bg-gray-100'>
        <DareNavbar />
        <DareSlider />
        <DareContent />
        <Footer />
    </main>
}

export default DareGames