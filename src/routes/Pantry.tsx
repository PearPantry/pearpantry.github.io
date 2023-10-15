import { useEffect, useState } from "react";
import { getDocs, collection, doc, writeBatch} from 'firebase/firestore';
import { db } from "../scripts/firebase";
import MenuBar from "../components/MenuBar";



function Pantry() {
    const[pantryList, setPantryList] = useState<{ id: string }[]>([]);

    const pantrysCollectionRef = collection(db, "Pantry");

    useEffect(() => {
        const getPantryList = async () => {

            try { 
                const data = await getDocs(pantrysCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(), 
                    id: doc.id,
                }));

                setPantryList(filteredData);
            } catch(err) {
                console.error(err);
            }
        };

        getPantryList();

    }, []);

    const handleFileUpload = async (event: any) => {
        const file = event.target.files[0];
      
        if (!file) {
          return;
        }
      
        try {
          const fileContent = await readFile(file) as any;
          const jsonData = JSON.parse(fileContent);
      
          if (jsonData.entities) {
            // Add jsonData.entities to Firestore
            await addProductLineItemsToFirestore(jsonData.entities.productLineItems);
          }
        } catch (error) {
          console.error("Error handling the file upload:", error);
        }
      };
      
      const readFile = (file: File) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
      
          reader.onload = (event: any) => {
            resolve(event.target.result);
          };
      
          reader.onerror = (error) => {
            reject(error);
          };
      
          reader.readAsText(file);
        });
      };
      
      const addProductLineItemsToFirestore = async (productLineItems: any) => {
        const pantryCollectionRef = collection(db, 'Pantry');
        const batch = writeBatch(db);
      
        productLineItems.forEach((item: any) => {
          const { name, totalPrice } = item.data;
          const documentData = {
            name: name.text,
            totalPrice: totalPrice.data,
          };
      
          const newDocumentRef = doc(pantryCollectionRef);
      
          batch.set(newDocumentRef, documentData);
        });
      
        try {
          await batch.commit(); // Commit the batch to Firestore
          console.log('Product line items added to Firestore successfully');
        } catch (error) {
          console.error('Error adding product line items to Firestore:', error);
        }
      };
            

    return (
        <div>
            <MenuBar/>
            <h1>Pantry</h1>
            <h2> </h2>
            <input
                type="file"
                accept=".txt"
                onChange={handleFileUpload}
            />

            {pantryList.map((items: any) => (
                <div key={items.id}>
                    <h3>{items.name.toLowerCase()}</h3>
                    {/* <p>Cost: {items.totalPrice}</p> */}
                </div>
            ))}
        </div>
    );
    
}

export default Pantry;