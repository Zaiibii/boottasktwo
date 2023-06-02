import { Component } from '@angular/core';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisComponent {

  inplay=[]
  tennis=[
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'England vs Ireland',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Leicestershire vs Derbyshire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Sussex vs Essex',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Yorkshire vs Lancashire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'}, {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'England vs Ireland',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Leicestershire vs Derbyshire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Sussex vs Essex',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Yorkshire vs Lancashire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'}, {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'England vs Ireland',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Leicestershire vs Derbyshire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Sussex vs Essex',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Yorkshire vs Lancashire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'}, {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'England vs Ireland',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Leicestershire vs Derbyshire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Sussex vs Essex',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Yorkshire vs Lancashire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Sussex vs Essex',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Yorkshire vs Lancashire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'}, {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'England vs Ireland',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Leicestershire vs Derbyshire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Sussex vs Essex',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Yorkshire vs Lancashire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Sussex vs Essex',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Yorkshire vs Lancashire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'}, {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'England vs Ireland',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Leicestershire vs Derbyshire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Sussex vs Essex',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
    {star:'fa fa-star-o fs-5 px-2 text-warning',titlename:'Yorkshire vs Lancashire',spanone:'F',spantwo:'BM',play:'fa fa-play-circle-o text-success mx-2 fs-4'},
  ]
}
