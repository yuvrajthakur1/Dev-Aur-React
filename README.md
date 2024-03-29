# callback hook:--

<!-- # Arrey bhai, `useCallback` toh React ka ek Hook hai jo tujhe ek function ko cache karne mein madad karta hai jab tere components re-render hote hai. Samjha na? Chal, real-life example se samjhata hoon.

# Socho, tere paas ek shopping app hai, aur tu ek component banaya hai jisme tere products hain. Ab imagine kar, har ek product ke saath ek button hai jispe click karke us product ko cart mein daal sakte hai.

# Ab samjho, har ek product ke saath ek alag function hai jo usko cart mein daalne ke liye hai. Jab tu component re-render hota hai, naya function create hota hai, aur yeh thoda time aur memory consume karta hai.

# Yahan `useCallback` aata hai. Is Hook ko use karke tu wahi function ko cache kar sakta hai. Matlab, jab tere component re-render hota hai, toh wahi purana function use hota hai, naye function ko create karne ki zaroorat nahi padti.

# Toh, iska matlab hai ki tera performance thoda improve hoga aur unnecessary functions create nahi honge. Real-life mein imagine kar, agar har baar tu ek naya recipe yaad karna chahega, toh woh thoda time consuming hoga. Lekin agar tu ek baar yaad karke rakh le, tab tu usko baar-baar yaad nahi karna padega, na?

# Yehi `useCallback` ka concept hai. Function ko cache karke re-rendering process ko optimize karna!
 -->


# ------------useState Hook--------------- #


<!-- Chalo bhai, samjhaate hain! Imagine tum ghar pe ek board game khel rahe ho, jaise Ludo. Ab, agar tum game ke progress ko track karna chahte ho, toh kya karoge? Tum ek sheet pe scores likhoge, right? Yahi kaam karta hai `useState` React mein.

React mein, jab hum kisi component mein kuch change karne ka sochte hain, jaise ki koi button click karna ya kuch input field mein likhna, tab hum `useState` ka use karte hain. Ye basically ek hook hai jo hume state manage karne mein madad karta hai.

Chalo, ek real-life example lete hain. Imagine tum ek ToDo list app bana rahe ho. Har ek ToDo item ko store karne ke liye, tumhe uski state maintain karni hogi. Yahan `useState` kaam aata hai.

Jaise, jab tum naya ToDo item add karte ho, `useState` uss item ko store karega. Phir jab tum uss item ko delete ya modify karte ho, `useState` uss change ko reflect karega.

Tum soch rahe honge, "Lekin ye state kya hota hai?" Toh bhai, state ek tarah ka storage hai jo component ke data ko store karta hai. Jaise ki tumhara current ToDo item ya koi specific data jo component ke liye important hai.

Toh, jab tum `useState` ka use karte ho, tum basically React ko bata rahe ho ki "Bhai, yeh mere component ke important data hai, isko store karke rakhna, aur jab bhi zarurat ho, mujhe access karne do."

Umeed hai samajh gaye ho! Agar aur kuch samajhna ho, toh pooch sakte ho! -->


# ---------------------- Render Meaning -------------------#

<!-- Bilkul bataunga, bhai!

Rendering ka matlab hota hai jab tumhara React application apne components ko update karta hai aur naye information ko screen par dikhata hai. Samjho jaise ki tum painting kar rahe ho. Jab tum nayi painting banate ho, tab tum naye colors aur strokes ka use karte ho na? Waise hi, jab React "render" karta hai, wo naye data ko lekar screen par changes dikhata hai.

Socho, tumhara component kuch data display kar raha hai, jaise ki ek list of ToDo items. Jab tum naya ToDo item add karte ho, React uss component ko re-render karta hai. Matlab wo component refresh hota hai aur updated list dikhata hai, including the new item.

Yeh process hota rehta hai jab koi event hota hai, jaise ki button click ya koi data change. React smart hota hai, wo sirf un parts ko re-render karta hai jo actual me change hua hai, aur baaki ko re-render nahi karta.

Toh, rendering ka simple matlab hai - React ke components ko refresh karna jab unme koi change hoti hai. Aur ye hota hai behind the scenes jab hum koi action lete hain jaise ki click, input type karte hain, ya koi data change hota hai. -->


# -----------------------------Hooks--------------------#

<!-- 
Bilkul bhai, sabse simple tareeke se samjhaunga!

Imagine tum ek chef ho aur tumhara kitchen ek React application hai. Ab, tumhe apne dishes ko perfect banana hai, right? Toh yeh hooks tumhari help karte hain kitchen ko organize aur dishes ko achhe se banana mein.

1. **useState (Bachcha Chef):** Yeh hook hai jo tumhe allow karta hai kisi bhi ingredient ya dish ka status track karne ke liye. Jaise ki tumhara masala box, jo bataega ki kitna masala bacha hai. Isse tum control mein rahoge aur perfect dish bana paoge.

2. **useEffect (Time Manager):** Imagine tumhe kuch dishes ko banana hai aur kuch ingredients ko marinate karne ke liye time lagta hai. useEffect jaise time manager tumhe batata hai ki kis time pe kya karna hai. Jaise ki jab oven garam ho jaaye, tab cake daalna.

3. **Custom Hooks (Secret Recipe):** Ab tumhare paas ek special recipe hai jo har dish ko amazing banata hai. Custom hooks jaise wo secret recipe hai jo tum use kar sakte ho har dish mein. Aur tumhare kitchen ke staff bhi usse use kar sakte hain!

4. **useContext (Master Inventory):** Socho tumhara kitchen ke beech mein ek master storage room hai jismein sab ingredients hain. useContext jaise master inventory tumhe allow karta hai in ingredients ko access karne ke liye bina unko manually pass kare.

Is tareeke se, React Hooks kitchen ke components ko organize aur efficient banate hain, aur tumhe dishes ko perfect banane mein madad karte hain. Aur sabse acchi baat, sab kuch ekdum simple aur easy rehta hai! -->