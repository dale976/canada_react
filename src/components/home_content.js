import React, { Component } from 'react';
import Header from './header';
import HeroImage from './hero_image';
import PrimaryContent from './primary_content';
import BlogSection from './blog/blog_section';

export default function HomeContent () {
    return (
      <div>
        <Header />
        <HeroImage />
        <PrimaryContent />
        <BlogSection />
      </div>
    );
}
