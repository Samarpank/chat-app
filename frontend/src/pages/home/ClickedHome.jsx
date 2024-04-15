import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';
import useConversation from "../../zustand/useConversation";
const ClickedHome = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
  return (
  <div className='flex h-[500px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
     { !selectedConversation ? (
       <Sidebar/>
         ):(<MessageContainer/>)
    }
    
  </div>
  );
};

export default ClickedHome;