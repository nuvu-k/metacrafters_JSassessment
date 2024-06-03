/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nuvu_coinNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _favouriteHobby, _phoneColour, _shampooName) {

    const nuvu_coinNFT = {
        "name" : _name,
        "favouriteHobby" : _favouriteHobby,
        "phoneColour" : _phoneColour,
        "shampooName" : _shampooName
    }
    nuvu_coinNFTs.push(nuvu_coinNFT);
    console.log("Minted " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < nuvu_coinNFTs.length; i++)
        {
            console.log("\nID: \t\t" + (i+1));
            console.log("Name : \t\t" + nuvu_coinNFTs[i].name);
            console.log("Hobby : \t" + nuvu_coinNFTs[i].favouriteHobby);
            console.log("Phone : \t" + nuvu_coinNFTs[i].phoneColour);
            console.log("Shampoo : \t" + nuvu_coinNFTs[i].shampooName);
        }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

    console.log(nuvu_coinNFTs.length);

}

// call your functions below this line

mintNFT("Yusuf", "Watch Anime", "Black", "Clinic Plus");
mintNFT("Satyam", "Sketching", "Grey", "Bare Anatomy");
listNFTs();
getTotalSupply;
