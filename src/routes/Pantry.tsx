import { useEffect, useState } from "react";
import { getDocs, collection, doc, writeBatch} from 'firebase/firestore';
import { db } from "../scripts/firebase";
import axios from 'axios';
import NutritionWidget from '../NutritionWidget.tsx';

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
          const fileContent = await readFile(file);
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
      
          reader.onload = (event) => {
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
      
        productLineItems.forEach((item) => {
            const { name, totalPrice, owner, users } = item;
        
            // Extract the text property from 'name' and 'owner' objects
            const itemName = name.text;
            const itemOwner = owner.text;
        
            // Create the document data for Firestore
            const documentData = {
              name: itemName,
              totalPrice: totalPrice.data,
              owner: itemOwner,
              users: users,
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
  <h1>Your Pantry</h1>
  <input type="file" accept=".txt" onChange={handleFileUpload} />

  <div style={{ display: 'flex' }}>
    <div style={{ flex: 1 }}>
      <h2>Ingredients</h2>
      <ul>
        {pantryList.map((items: any) => (
          <li key={items.id}>
            <h3>{items.name}</h3>
            <p>Cost: {items.totalPrice}</p>
          </li>
        ))}
      </ul>
    </div>

    <div style={{ flex: 1 }}>
      <h2>Nutritional Information: Blueberries</h2>
      <NutritionWidget />
    </div>
  </div>
</div>


    );
    
}

export default Pantry;