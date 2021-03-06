import React from 'react';
import { projects, profile } from '../constants/user';

export default function Projects() {
  return (
    <section className="projects section-spacing">
      <div className="container">
        <div className="row">
          <div className="col-md-10" id="portfolio">
            <div className="section-header">Projects_</div>
            <p className="description">{profile.project_intro}</p>
          </div>
        </div>
        <div className="row">
          {projects.map(project => (
            <div className="col-lg-4 col-md-6" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="project">
                  <img className="image" src={require(`../assets/images/${project.image}`)} alt={project.title} />
                  <div className="details slide-in">
                    <h3 className="title">{project.title}</h3>
                    <p className="description">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
