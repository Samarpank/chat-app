import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';
const ClickedSide = () => {
  return (
  <div className='flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <Sidebar></Sidebar>
  </div>
  );
};

export default ClickedSide;