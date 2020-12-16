import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable,of, from} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'


export interface UserDetails {
    id:number
    first_name:string
    last_name:string
    email:string
    password:string
    exp:number
    type:string
    date_recrutement:string
    iat:number
    
}
export interface CongeDetails {
    id:number
    date_debut:string
    date_fin:string
    commentaire:string
    Nbrjours:number
    Etat:string
    type:string
    userId:number
    
    
    
}
export interface HistoriqueDetails {
    id:number
    userId:number
    congeId:string
    commentaire:string 
    user_name:string
    EtatHistory:string
    date_creation:string
    
}

interface TokenResponse{
    token:string
}

export interface ToeknPayload{
    id:number
    first_name:string
    last_name:string
    email:string
    password:string
    type:string
    date_recrutement:string

}

@Injectable()
export class AuthentificationService {
    private token:string

    constructor(private http: HttpClient,private router:Router){}
        
        private saveToken(token: string) : void{
            localStorage.setItem('userToken',token)
            this.token=token
        }

        private getToken():string{
            if (!this.token) {
                this.token=localStorage.getItem('userToken')
            }
            return this.token
        }

        public getUserDetails():UserDetails{
            
            const token =this.getToken()
            let payload
            if (token) {
                payload=token.split('.')[1]
                payload=window.atob(payload)
                return JSON.parse(payload)
            }else{
                return null
            }

            
        }

        

        public isLoggenId():boolean{
            const user = this.getUserDetails()
            if (user) {
                return user.exp >Date.now() / 1000
            }else{
                return false
            }
        }

        public register(user: ToeknPayload):Observable<any>{
            const base=this.http.post(`/users/register`,user)

            const request =base.pipe(
                map((data:TokenResponse)=>{
                    if (data.token) {
                       // this.saveToken(data.token)
                    }
                    return data
                }) 
            )
            return request
        }

    

        public login(user: ToeknPayload):Observable<any>{
            const base=this.http.post(`/users/login`,user)

            const request =base.pipe(
                map((data:TokenResponse)=>{
                    if (data.token) {
                        this.saveToken(data.token)
                    }
                    return data
                })
            )
            return request
        }

        public delete(id):Observable<any>{
            return this.http.get(`/users/delete/${id}`)

        }

       

        public profile():Observable<any>{
            return this.http.get(`/users/profile`,{
                headers:{Authorization: `${this.getToken()}`}
            })
        }

        public AllUsers():Observable<any>{
            const base=this.http.get(`/users/AllUsers`)

            const request =base.pipe(
                map((data:TokenResponse)=>{
                    if (data.token) {
                        this.saveToken(data.token)
                    }
                    return data
                })
            )
            return request
        }


        public GetIdUser(id):Observable<any>{
            return this.http.get(`/users/user/${id}`)
        }

        public updateUser(id,user:UserDetails):Observable<any>{
            return this.http.put(`/users/update/${id}`,user)

        }


        
        /***** Congé *********/ 
        
        public deleteConge(id):Observable<any>{
            return this.http.get(`/conges/delete/${id}`)

        }
        public AddConge(conge: CongeDetails):Observable<any>{
            const base=this.http.post(`/conges/addconge`,conge)

            const request =base.pipe(
                map((data:CongeDetails)=>{
                    return data
                }) 
            )
            return request
        }
        public update(id,conge:CongeDetails):Observable<any>{
            return this.http.put(`/conges/update/${id}`,conge)

        }

        public updateDirect(id,conge:CongeDetails):Observable<any>{
            return this.http.put(`/conges/updateDirect/${id}`,conge)

        }
        public refusDirect(id,conge:CongeDetails):Observable<any>{
            return this.http.put(`/conges/refuseDirect/${id}`,conge)

        }
        public getCongeAllRefus():Observable<any>{
            const user = this.getUserDetails()
            return this.http.get(`/conges/allcongeRefus/${user.id}`)
        }

        public getCongeAllRefuss():Observable<any>{
            const user = this.getUserDetails()
            return this.http.get(`/conges/allcongeRefuss/`)
        }

        public getCongeAll():Observable<any>{
            const user = this.getUserDetails()
            return this.http.get(`/conges/allconge/${user.id}`)
        }
        public getAllConge():Observable<any>{
            //const user = this.getUserDetails()
            return this.http.get(`/conges/ttconge`)
        }
        public getAllCongevalide():Observable<any>{
            //const user = this.getUserDetails()
            return this.http.get(`/conges/ttcongev`)
        }
        public conge_valide():Observable<any>{
            const user = this.getUserDetails()
            return this.http.get(`/conges/conge_valide/${user.id}`)
        }

        public count():Observable<any>{
            const user = this.getUserDetails()
            return this.http.get(`/conges/count/${user.id}`)
        }
        public countEnAttente():Observable<any>{
            const user = this.getUserDetails()
            return this.http.get(`/conges/countAttente/${user.id}`)
        }

        public sum():Observable<any>{
            const user = this.getUserDetails()
            return this.http.get(`/conges/sum/${user.id}`)
        }

        public sum1(id):Observable<any>{
            //const user = this.getUserDetails()
            return this.http.get(`/conges/sum/${id}`)
        }

        public sumAll():Observable<any>{
            //const user = this.getUserDetails()
            return this.http.get(`/conges/sumAll`)
        }

        public CongeBetween(conge:CongeDetails):Observable<any>
        {
            return this.http.get(`/conges/congeBetween/${conge.date_debut}/${conge.date_fin}`)
        }
        public GetIdConge(id):Observable<any>{
            return this.http.get(`/conges/conge/${id}`)
        }


        public GetNomConge(nom):Observable<any>{
            return this.http.get(`/conges/congeByName/${nom}`)
        }

        public logout():void{
            this.token=''
            window.localStorage.removeItem('userToken')
            this.router.navigateByUrl('/')
        }

        /********************* HISTORIQUES ****************/

        
        public getHistorique(id):Observable<any>{
            return this.http.get(`/historiques/getHistorique/${id}`)
        }


        public AddHistorique(history: HistoriqueDetails):Observable<any>{
            const base=this.http.post(`/historiques/AddHistorique`,history)

            const request =base.pipe(
                map((data:HistoriqueDetails)=>{
                    return data
                }) 
            )
            return request
        }
        /********************* API JOURS FERIES ****************/

        public showApi(nom,annee):Observable<any>{
            return this.http.get(`https://calendrier.api.gouv.fr/jours-feries/${nom}/${annee}.json`)
        }

        public showApiALL():Observable<any>{
            return this.http.get(` https://etalab.github.io/jours-feries-france-data/json/guadeloupe.json`)
        }
       
    
}