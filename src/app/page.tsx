import Navbar from '@/components/Header'; // Match file name exactly!
import ProjectSection from '@/components/ProjectSection';
import StarfieldBackground from '@/components/StarfieldBackground';
import FloatingButton from '@/components/FloatingButton';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FloatingAvatar from '@/components/FloatingAvatar';
import SoundToggle from '@/components/SoundToggle';
import SparkleOverlay from '@/components/SparkleOverlay';
import Header from '@/components/Header'; // Ensure this matches the file name exactly

export default function Home() {
  return (
    <>
      <StarfieldBackground />
      <SparkleOverlay />
      <Header/>
      <FloatingButton/>
      <FloatingAvatar />
      <main style={{
        paddingTop: '6rem',
        paddingBottom: '4rem',
        minHeight: '100vh',
        background: 'url("https://i.pinimg.com/originals/fd/fe/0e/fdfe0e66f1c437cfbfc36e2896ed4cc3.gif") center/cover no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        textShadow: '0 2px 8px rgba(0,0,0,0.5)',
      }}>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
