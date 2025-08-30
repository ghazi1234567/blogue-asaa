import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Trophy, Users, Calendar, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const teamMembers = [
  {
    name: 'Ahmed Benali',
    role: 'Chief Sports Editor',
    bio: 'Sports journalist with over 15 years of experience covering ASA and Moroccan football.',
    expertise: ['Match Analysis', 'Player Interviews', 'Transfer News'],
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Sara Alami',
    role: 'Content Manager',
    bio: 'Passionate about storytelling and bringing ASA\'s stories to life for our global audience.',
    expertise: ['Content Strategy', 'Social Media', 'Fan Engagement'],
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Mohamed Tazi',
    role: 'Technical Writer',
    bio: 'Former ASA player turned writer, providing insider perspectives on training and tactics.',
    expertise: ['Tactical Analysis', 'Training Reports', 'Youth Development'],
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Fatima Zahra',
    role: 'Community Reporter',
    bio: 'Covering ASA\'s community initiatives and the human stories behind the beautiful game.',
    expertise: ['Community Stories', 'Social Impact', 'Fan Features'],
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
]

const achievements = [
  {
    year: '2024',
    title: 'Championship Winners',
    description: 'First championship title in over a decade'
  },
  {
    year: '2023',
    title: 'Youth Development Award',
    description: 'Recognized for outstanding youth academy program'
  },
  {
    year: '2022',
    title: 'Community Impact Prize',
    description: 'Honored for social initiatives and community engagement'
  }
]

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About ASA Sports - Our Story, Mission & Team</title>
        <meta name="description" content="Learn about ASA Sports Club, our history since 1961, mission, values, and the passionate team behind our blog." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ASA Sports</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Astre Sportif D'Agadir
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Welcome to the official blog of Astre Sportif D'Agadir (ASA), one of Morocco's most prestigious 
                football clubs. Since 1961, we've been more than just a football team – we're a symbol of pride, 
                passion, and community spirit in Agadir and beyond.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 1961, Astre Sportif D'Agadir has grown from humble beginnings to become one of 
                Morocco's most respected football institutions. Our journey has been marked by dedication, 
                perseverance, and an unwavering commitment to excellence both on and off the pitch.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ASA Stadium"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">1961</div>
              <div className="text-sm text-gray-600">Founded</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">45,000</div>
              <div className="text-sm text-gray-600">Stadium Capacity</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">Trophies Won</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Youth Players</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.year} className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8" />
                </div>
                <Badge className="mb-2 bg-red-600">{achievement.year}</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Editorial Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate journalists and writers who bring you the latest ASA news, analysis, and stories 
              from behind the scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-900">Expertise:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a story tip, feedback, or want to collaborate? We'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
              <p className="text-gray-600 text-sm">Agadir, Morocco</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">blog@asa-sports.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <p className="text-gray-600 text-sm">+212 123 456 789</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}