import { Layout } from '@/components/layout/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Truck, 
  Shield, 
  Award, 
  Target, 
  Heart,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide quality products at affordable prices while delivering exceptional customer service.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and strive to exceed their expectations with every purchase.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All our products are carefully selected and tested to ensure they meet the highest quality standards.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to excellence in everything we do, from product selection to customer support.'
    }
  ]

  const stats = [
    { label: 'Happy Customers', value: '50,000+', icon: Users },
    { label: 'Products Sold', value: '200,000+', icon: Truck },
    { label: 'Product Categories', value: '25+', icon: Award },
    { label: 'Years in Business', value: '5+', icon: Shield }
  ]

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years of e-commerce experience.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      description: 'Ensuring smooth operations and exceptional customer service.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Marketing',
      description: 'Creative strategist driving our brand growth and engagement.'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Customer Experience',
      description: 'Dedicated to making every customer interaction memorable.'
    }
  ]

  return (
    <Layout>
      <div className="container py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About ECommerce
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are more than just an online store. We are your trusted partner in finding quality products 
            that enhance your lifestyle. Founded with a passion for excellence and commitment to customer satisfaction.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ECommerce began in 2019 with a simple mission: to make quality products accessible to everyone. 
                  What started as a small operation has grown into a trusted online destination for thousands of customers.
                </p>
                <p>
                  Our journey has been driven by our commitment to quality, value, and exceptional customer service. 
                  We carefully curate our product selection to ensure that every item meets our high standards.
                </p>
                <p>
                  Today, we continue to innovate and expand our offerings, always keeping our customers\' needs at the 
                  heart of everything we do. Thank you for being part of our story.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Our Journey</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our business and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind ECommerce who work tirelessly to serve you better
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions? We'd love to hear from you.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">support@ecommerce.com</p>
                </div>
                <div className="text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">123 Main St, City, State 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  )
}