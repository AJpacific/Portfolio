import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';


// --- SKILLS DATA ---

const skills = [
  {
    id: 'java',
    name: 'Java',
    icon: 'Code',
    level: 90,
    color: 'from-teal-500 to-indigo-500',
    tags: ['OOP', 'Multithreading', 'Concurrency'],
    code: `// Java OOP & Multithreading Example
import java.util.concurrent.*;
import java.util.*;

class User {
    private final String username;
    private final String email;

    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public void display() {
        System.out.println("User: " + username + ", Email: " + email);
    }
}

class UserService {
    private final ExecutorService executor = Executors.newFixedThreadPool(4);
    private final List<User> users = new ArrayList<>();

    public void addUserAsync(String username, String email) {
        executor.submit(() -> {
            User user = new User(username, email);
            synchronized (users) {
                users.add(user);
            }
            System.out.println("User added: " + username);
        });
    }

    public void shutdown() {
        executor.shutdown();
    }

    public void showUsers() {
        synchronized (users) {
            users.forEach(User::display);
        }
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        UserService service = new UserService();

        service.addUserAsync("ashutosh", "ash@example.com");
        service.addUserAsync("john", "john@example.com");

        Thread.sleep(1000); // Wait for tasks to finish

        service.showUsers();
        service.shutdown();
    }
}`
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'Code',
    level: 60,
    color: 'from-yellow-500 to-orange-500',
    tags: ['ES6+', 'Async/Await', 'DOM'],
    code: `// Advanced JavaScript Concepts
const asyncDataProcessor = async (data) => {
  try {
    const processed = await Promise.all(
      data.map(async (item) => {
        const result = await processItem(item);
        return { ...item, processed: result };
      })
    );
    return processed.filter(item => item.processed);
  } catch (error) {
    console.error('Processing failed:', error);
    throw new Error('Data processing error');
  }
};

// Usage with error handling
asyncDataProcessor(userData)
  .then(results => console.log('Success:', results))
  .catch(err => handleError(err));`
  },
  {
    id: 'spring-framework',
    name: 'Spring Framework',
    icon: 'Leaf',
    level: 70,
    color: 'from-green-500 to-emerald-500',
    tags: ['Spring Core', 'MVC', 'DI'],
    code: `// Secure REST API with validation
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Input validation to prevent injection
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }
}`
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    icon: 'Rocket',
    level: 80,
    color: 'from-blue-500 to-cyan-500',
    tags: ['REST APIs', 'Auto-Config', 'Microservices'],
    code: `// Secure application properties
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        // Enable SSL/TLS and secure config
        System.setProperty("server.ssl.enabled", "true");
        SpringApplication.run(Application.class, args);
    }
}`
  },
  {
    id: 'jdbc',
    name: 'JDBC',
    icon: 'Database',
    level: 80,
    color: 'from-indigo-500 to-purple-500',
    tags: ['Java SQL API', 'PreparedStatement', 'ResultSet'],
    code: `// Secure JDBC with PreparedStatement
try (Connection conn = DriverManager.getConnection(url, user, password)) {
    PreparedStatement stmt = conn.prepareStatement(
        "SELECT * FROM users WHERE username = ?"
    );
    stmt.setString(1, inputUsername); // Prevents SQL injection
    ResultSet rs = stmt.executeQuery();
}`
  },
  {
    id: 'spring-jdbc',
    name: 'Spring JDBC',
    icon: 'DatabaseZap',
    level: 90,
    color: 'from-teal-500 to-green-500',
    tags: ['JdbcTemplate', 'Data Access', 'RowMapper'],
    code: `// Secure Spring JDBC query
@Autowired
private JdbcTemplate jdbcTemplate;

public List<User> findByEmail(String email) {
    return jdbcTemplate.query(
        "SELECT * FROM users WHERE email = ?",
        new BeanPropertyRowMapper<>(User.class),
        email // Prevents SQL injection
    );
}`
  },
  {
    id: 'spring-data-jpa',
    name: 'Spring Data JPA',
    icon: 'Table',
    level: 80,
    color: 'from-pink-500 to-rose-500',
    tags: ['JpaRepository', 'Entity Mapping', '@Query'],
    code: `// Parameterized query for safety
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findByEmail(@Param("email") String email);
}`
  },
  {
    id: 'hibernate',
    name: 'Hibernate',
    icon: 'Layers',
    level: 80,
    color: 'from-yellow-600 to-amber-500',
    tags: ['ORM', 'HQL', 'Entity Lifecycle'],
    code: `// Secure entity with field constraints
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @Email
    @Column(unique = true)
    private String email;
}`
  },
  {
    id: 'spring-security',
    name: 'Spring Security',
    icon: 'Shield',
    level: 80,
    color: 'from-red-500 to-orange-500',
    tags: ['Authentication', 'Authorization', 'JWT'],
    code: `// Strong Spring Security config
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().enable() // Protect against CSRF
            .authorizeRequests()
                .antMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            .and()
            .formLogin()
                .loginPage("/login")
                .permitAll();
    }
}`
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'Terminal',
    level: 50,
    color: 'from-green-500 to-emerald-500',
    tags: ['Scripting', 'Data Science', 'Security'],
    code: `# Python Security & Data Processing
import hashlib
import secrets
from typing import List, Dict, Optional
from dataclasses import dataclass

@dataclass
class SecureUser:
    username: str
    email: str
    password_hash: str
    salt: str
    
    @classmethod
    def create_user(cls, username: str, email: str, password: str):
        salt = secrets.token_hex(32)
        password_hash = hashlib.pbkdf2_hmac(
            'sha256', 
            password.encode('utf-8'), 
            salt.encode('utf-8'), 
            100000
        )
        return cls(username, email, password_hash.hex(), salt)
    
    def verify_password(self, password: str) -> bool:
        password_hash = hashlib.pbkdf2_hmac(
            'sha256',
            password.encode('utf-8'),
            self.salt.encode('utf-8'),
            100000
        )
        return secrets.compare_digest(
            self.password_hash, 
            password_hash.hex()
        )

# Usage
user = SecureUser.create_user("ashutosh", "ash@example.com", "secure_pass")
is_valid = user.verify_password("secure_pass")  # True`
  },
  {
    id: 'react',
    name: 'React',
    icon: 'Code',
    level: 60,
    color: 'from-cyan-500 to-blue-500',
    tags: ['Frontend', 'UI', 'Component-Based'],
    code: `// Simple React Functional Component Example
  import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  
  export default Counter;`
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    icon: 'Palette', // replace with your icon name if different
    level: 60,
    color: 'from-blue-400 to-indigo-600',
    tags: ['CSS', 'Utility-First', 'Responsive Design'],
    code: `<!-- Tailwind CSS Responsive Button -->
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:px-6 md:py-3">
    Click Me
  </button>
  
  <!-- Responsive container -->
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-900">Welcome to Tailwind CSS</h1>
    <p className="mt-4 text-gray-700">Build modern UIs with utility classes.</p>
  </div>`
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: 'Shield',
    level: 60,
    color: 'from-red-500 to-pink-500',
    tags: ['Pen Testing', 'OWASP Top 10', 'Encryption'],
    code: `# Security Implementation Example
import jwt, bcrypt
from datetime import datetime, timedelta
from cryptography.fernet import Fernet

class Security:
    def __init__(self, key):
        self.key = key
        self.cipher = Fernet(Fernet.generate_key())

    def hash_pwd(self, pwd):  # Hash password
        return bcrypt.hashpw(pwd.encode(), bcrypt.gensalt()).decode()

    def verify_pwd(self, pwd, hashed):  # Verify password
        return bcrypt.checkpw(pwd.encode(), hashed.encode())

    def make_jwt(self, uid):  # Create JWT
        payload = {"uid": uid, "exp": datetime.utcnow() + timedelta(hours=24)}
        return jwt.encode(payload, self.key, algorithm="HS256")

    def encrypt(self, data):  # Encrypt data
        return self.cipher.encrypt(data.encode()).decode()

    def decrypt(self, data):  # Decrypt data
        return self.cipher.decrypt(data.encode()).decode()

# Usage Example
sec = Security("your-secret-key")
hashed = sec.hash_pwd("password123")
token = sec.make_jwt("user123")
secret = sec.encrypt("Sensitive Info")`
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'Database',
    level: 70,
    color: 'from-purple-500 to-indigo-500',
    tags: ['SQL', 'PostgreSQL', 'Stored Procedures'],
    code: `-- Advanced SQL with Security Considerations
-- User management with role-based access
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    salt VARCHAR(64) NOT NULL,
    role_id INTEGER REFERENCES roles(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    failed_login_attempts INTEGER DEFAULT 0,
    account_locked_until TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Secure stored procedure for user authentication
CREATE OR REPLACE FUNCTION authenticate_user(
    p_username VARCHAR(50),
    p_password VARCHAR(255)
) RETURNS TABLE(
    user_id UUID,
    username VARCHAR(50),
    role_name VARCHAR(50),
    success BOOLEAN
) AS $$
DECLARE
    v_user_record RECORD;
    v_password_valid BOOLEAN := FALSE;
BEGIN
    -- Check if account is locked
    SELECT * INTO v_user_record 
    FROM users u 
    JOIN roles r ON u.role_id = r.id
    WHERE u.username = p_username 
    AND u.is_active = TRUE
    AND (u.account_locked_until IS NULL OR u.account_locked_until < NOW());
    
    IF NOT FOUND THEN
        RETURN QUERY SELECT NULL::UUID, NULL::VARCHAR, NULL::VARCHAR, FALSE;
        RETURN;
    END IF;
    
    -- Verify password (in real implementation, use proper hashing)
    v_password_valid := verify_password(p_password, v_user_record.password_hash, v_user_record.salt);
    
    IF v_password_valid THEN
        -- Reset failed attempts and update last login
        UPDATE users 
        SET failed_login_attempts = 0, 
            last_login = NOW()
        WHERE id = v_user_record.id;
        
        RETURN QUERY SELECT 
            v_user_record.id,
            v_user_record.username,
            v_user_record.role_name,
            TRUE;
    ELSE
        -- Increment failed attempts
        UPDATE users 
        SET failed_login_attempts = failed_login_attempts + 1,
            account_locked_until = CASE 
                WHEN failed_login_attempts >= 4 
                THEN NOW() + INTERVAL '30 minutes'
                ELSE account_locked_until
            END
        WHERE id = v_user_record.id;
        
        RETURN QUERY SELECT NULL::UUID, NULL::VARCHAR, NULL::VARCHAR, FALSE;
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;`
  }
];


// --- REFACTORED & REUSABLE COMPONENTS ---

/**
 * CodePreview Component: Displays the code editor UI.
 * It's a pure component that receives the active skill object as a prop.
 */
const CodePreview = ({ skill }) => (
  <div className="bg-gray-800/50 rounded-lg border border-teal-500/20 overflow-hidden shadow-lg mt-4 backdrop-blur-sm">
    {/* Code Editor Header */}
    <div className="flex items-center justify-between px-4 py-2 bg-gray-900/70 border-b border-teal-500/20">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="text-gray-400 text-xs font-mono">
        {skill.name.toLowerCase().replace(' ', '_')}_demo
      </div>
      <div className="flex items-center">
        <Icon name="Play" size={16} className="text-teal-400" />
      </div>
    </div>

    {/* Code Content */}
    <div className="p-4 font-mono text-sm overflow-x-auto">
      <pre className="text-gray-200 whitespace-pre-wrap">
        <code>{skill.code}</code>
      </pre>
    </div>
  </div>
);


/**
 * Main SkillsLaboratory Component
 * Uses a unified accordion layout that works seamlessly on all screen sizes.
 */
const SkillsLaboratory = () => {
  // 'java' is the default open skill, can be set to null for all to be closed initially.
  const [activeSkill, setActiveSkill] = useState('null'); 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            <span className="text-cyber-green font-mono">&lt;</span>
            Skills Laboratory
            <span className="text-cyber-green font-mono">/&gt;</span>
          </h2>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-text-muted max-w-3xl mx-auto">
            An interactive showcase of technical skills. Click any item to expand and view a relevant code snippet.
          </motion.p>
        </motion.div>

        {/* Skills Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-3"
        >
          {skills.map((skill) => {
            const isActive = activeSkill === skill.id;
            return (
              <motion.div key={skill.id} variants={itemVariants} className="bg-dark-surface/50 rounded-lg border border-primary/20 shadow-md">
                <div
                  onClick={() => setActiveSkill(isActive ? null : skill.id)}
                  className="p-4 cursor-pointer"
                >
                  {/* Skill Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                        <Icon name={skill.icon} size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
                        <div className="text-sm text-gray-400">{skill.level}% Proficiency</div>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <Icon name="ChevronDown" size={24} className="text-teal-400" />
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4">
                    <motion.div
                      className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skill.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300 font-mono">
                            {tag}
                        </span>
                    ))}
                  </div>

                </div>

                {/* Collapsible Code Preview using AnimatePresence for smooth transitions */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden px-4 pb-4"
                    >
                      <CodePreview skill={skill} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsLaboratory;