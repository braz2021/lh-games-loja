import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

const routes: Routes = [
    { path: 'restrito/atualizar', component: AtualizaProdutoComponent },
    { path: 'restrito/cadastro', component: CadastroProdutoComponent },
    { path: 'restrito/listar', component: ListaProdutoComponent }, 
   
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RestritoRoutingModule { }