import SmileyAIBottomNav from '../../components/Common/BottomNav'
import SmileyAINavbar from '../../components/Common/SmileyAINav'
import DareContent from '../../components/DareMsg/DareContent'
import DareSlider from '../../components/DareMsg/DareSlider'

const DareGames = () => {
    return <main className='bg-gray-100'>
       <SmileyAINavbar title="- Dares" />
        <DareSlider />
        <DareContent />
        <SmileyAIBottomNav />
    </main>
}

export default DareGames