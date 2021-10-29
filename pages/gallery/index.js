import Footer from "@/composite/footer/footer";
import Header from "@/composite/header";
import Gallery from '@/view/gallery/index'
import { wrapper } from "@/redux/store";
import {getGalleryImage} from "@/redux/api/galleryImage/galleryImageAPICall"
const Index = ()=>{
    return(
        <div>
<Header/>
<Gallery/>
<Footer/>

        </div>
    )
}
export default Index;

Index.getInitialProps = wrapper.getInitialPageProps(
    (store) =>
     async  ({ pathname, req, res ,query }) => {
      console.log(query)
       const deger =  await store.dispatch(getGalleryImage(query.page))
      
      }
  );