import logo from './logo.svg';
import './App.css';
import { ChakraProvider , Button, Input, Stack, InputGroup, InputLeftElement} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'
import { useState } from 'react';



function App() {
  const [imageUrl , setImageUrl] = useState(null);
  const [imageData, setImageData] = useState(null)
  const handleInputUrl = (event) =>{
    setImageUrl(event.target.value)
  }
  const onGoButtonClick = async () =>{
      const response = await fetch(imageUrl);
      if(response){
        setImageData("data:image/jpeg;base64,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");
      }
      
  }
  return (
    <ChakraProvider>
    <Stack spacing={4}>
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<AddIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' value = {imageUrl} onChange = {handleInputUrl} />
  </InputGroup>
</Stack>
<button onClick={onGoButtonClick}>go</button>
{imageData && (
  <img src={imageData} />
)}
  </ChakraProvider>
  );
}

export default App;
