import { motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation 
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./y2.png'
              alt="logo"
              className="w-20 h-20 object-contain"  
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> AI.
              </h1>
            </motion.div>
          </motion.div>
          <motion.div {...headContentAnimation} className="flex flex-col gap-5">
            <p className="max-w-md font-normal text-gray-600 text base">
              Create stunning and exquisite fashion with our 
              brand new 3D
                customization tool. <strong>Unleash your
                wildest imagination</strong>{" "}
                and define your own style.
            </p>
            <CustomButton 
              type="filled"
              title="Customize This"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home