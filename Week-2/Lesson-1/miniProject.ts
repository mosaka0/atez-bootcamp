const dummyData = [
    {
        id: 1,
        title: "iPhone 8",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        color: 'Green',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 2,
        title: "iPhone X",
        description: "An apple mobile which is nothing like apple",
        price: 649,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        color: 'Black',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 3,
        title: "iPhone XS",
        description: "An apple mobile which is nothing like apple",
        price: 749,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        color: 'Red',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 4,
        title: "iPhone 11",
        description: "An apple mobile which is nothing like apple",
        price: 849,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        color: 'Gray',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 5,
        title: "Galaxy S23",
        description: "An Samsung mobile which is nothing like apple",
        price: 649,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 194,
        brand: "Samsung",
        color: 'Green',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 6,
        title: "Galaxy S22",
        description: "An Samsung mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 80,
        brand: "Samsung",
        color: 'Black',
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 6,
        title: "Abra A7",
        description: "An Monster laptop which is nothing like apple",
        price: 349,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 80,
        brand: "Monster",
        screenDimentions: 17,
        category: "laptop",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 7,
        title: "Tulpar T7",
        description: "An Monster laptop which is nothing like apple",
        price: 449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 80,
        brand: "Monster",
        screenDimentions: 15,
        category: "laptop",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 7,
        title: "Victus",
        description: "An HP laptop which is nothing like apple",
        price: 449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        screenDimentions: 14,
        category: "laptop",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 8,
        title: "BRAVIA",
        description: "An Sonny TV which is nothing like apple",
        price: 1449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        smartTv: true,
        category: "television",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 9,
        title: "BRAVIA",
        description: "An Sonny TV which is nothing like apple",
        price: 1449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        smartTv: false,
        category: "television",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 10,
        title: "BRAVIA",
        description: "An Sonny TV which is nothing like apple",
        price: 1449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        smartTv: false,
        category: "television",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 11,
        title: "BRAVIA",
        description: "An Sonny TV which is nothing like apple",
        price: 1449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        smartTv: true,
        category: "television",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 12,
        title: "IPad Air",
        description: "An Apple product which is nothing like apple",
        price: 1449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 12,
        brand: "Apple",
        celluar: false,
        wifi:true,
        color: 'blue',
        category: "tablet",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 13,
        title: "IPad Pro",
        description: "An Apple tablet which is nothing like apple",
        price: 1449,
        discountPercentage: 12.96,
        rating: 2.69,
        stock: 12,
        brand: "HP",
        celluar: true,
        wifi:false,
        color: 'black',
        category: "tablet",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    }
];

// Icin Bir Class yazacagiz Calssimizida
// tum Urunleri donecek bir fonksiyon.
// tum Telefonlri, tabletleri ve televizyonlari donen bir fonksiyon olacak.
// Text Search yapabilecek bir fonksiyornumuz olacak.








interface IProduct {
    title: string;
    description: string,
    price: number;
    rating: number;
    id: number | string;
    thumbnail: string
}

// interface IColor {
//     color: string;
// }


interface ISmartPhone extends IProduct {
    color: string;
}

interface ILaptop extends  IProduct {
    discountPercentage: number,
    screenDimentions: number,
}

interface ITablet extends IProduct {
    celluar: boolean;
    wifi: boolean;
    color:string;
}

interface ITelevision extends IProduct {
    smartTv:boolean;
    stock: number;
}


interface IProductApi<T> {
    findAll<T extends IProduct> () : T[]; //Parantez içi IProduct'da olabilir.

    findByCategory <T extends IProduct>(category:string): T[];

    findByText: (input:string) => void;
}

// donecegimiz datalar.
//telefon icin { title, description, price, raiting, color ve thumbnail}
//laptop icin { title, description, price, raiting, screenDimentions , discount persentage, thumbnail}
//televizyon icin { title, description, price, raiting thumbnail smarttv, stock}
//tablet icin { title, description, price, raiting, color, celluar, wifi ve thumbnail}
class ProductApi implements IProductApi<IProduct> {
    smartphoneCustomizing(product) : ISmartPhone {
        return {
            title: product.title,
            description: product.description,
            price: product.price,
            rating: product.rating,
            id: product.id,
            thumbnail: product.thumbnail,
            color: product.color
        }
    }
    televisionCustomizing(product) : ITelevision {
        return {
            title: product.title,
            description: product.description,
            price: product.price,
            rating: product.rating,
            id: product.id,
            thumbnail: product.thumbnail,
            smartTv: product.smartTv,
            stock: product.stock
        }
    }
    tabletCustomizing(product) : ITablet {
        return {
            title: product.title,
            description: product.description,
            price: product.price,
            rating: product.rating,
            id: product.id,
            color: product.color,
            celluar: product.celluar,
            wifi: product.wifi,
            thumbnail: product.thumbnail,
        }
    }
    laptopCustomizing(product) : ILaptop {
        return {
            title: product.title,
            description: product.description,
            price: product.price,
            rating: product.rating,
            id: product.id,
            thumbnail: product.thumbnail,
            screenDimentions: product.screenDimentions,
            discountPercentage: product.discountPercentage
        }
    }



    findAll<T extends IProduct> (): T[]{
        const splitedData: any[]= dummyData.map(product => { //T hata veriyor??
            if(product.category === 'smartphones'){
                return this.smartphoneCustomizing(product);
            }
            else if(product.category === 'television'){
                return this.televisionCustomizing(product);
            }
            else if(product.category === 'tablet'){
                return this.tabletCustomizing(product);
            }
            else if(product.category === 'laptop'){
                return this.laptopCustomizing(product);
            }
            else {}
        }) ;
        return splitedData as T[];
    }

    findByCategory <T extends IProduct> (category: string): T[] {
        const splitedData : any[] = dummyData.map(product => { //T hata veriyor??
            if(category === product.category){
                if(product.category === 'smartphones'){
                    return this.smartphoneCustomizing(product);
                }
                else if(product.category === 'television'){
                    return this.televisionCustomizing(product);
                }
                else if(product.category === 'tablet'){
                    return this.tabletCustomizing(product);
                }
                else if(product.category === 'laptop'){
                    return this.laptopCustomizing(product);
                }
            }
            else{} //undefined dönüyor??
        });
        return splitedData as T[];
    }

    findByText<T extends IProduct>(input: string): T[]{
        const splitedData = this.findAll();
        let result = []; //T hata veriyor??
        splitedData.map(product => {
            for (let key in product) {
                if (product[key].toString().toLowerCase().includes(input.toLowerCase())) {
                    result.push(product);
                }
            }
        });
        return result as T[];
    }
}

let a = new ProductApi();
console.log("data:",a.findAll());
console.log("category:",a.findByCategory("laptop"));
console.log("forText:",a.findByText("iphone x"))




// NOTLAR

// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//
