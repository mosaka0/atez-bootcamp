import { dummyData } from "./database";


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
    findAll<T extends IProduct> () : T[];

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

let testObj = new ProductApi();
console.log("data:",testObj.findAll());
console.log("category:",testObj.findByCategory("laptop"));
console.log("forText:",testObj.findByText("iphone x"))




// NOTLAR

// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//
