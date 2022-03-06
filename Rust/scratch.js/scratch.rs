use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    // create the mutex to have shared state
    // Wrap it in an Arc object to share safely
    let shared_state = Arc::new(Mutex::new(0));
    // create a vector to hold all the threads
    let mut threads = vec![];

    // loop 16 times, create a thread on each loop, that uses the mutex
    for _ in 0..16 {

        // create an atomic copy of the shared state
        let shared_state = Arc::clone(&shared_state);
        let child_thread = thread::spawn(move || {

            // lock the shared state in this thread
            let mut num = shared_state.lock().unwrap();
            // mutate the shared_state
            *num += 1;
        });
        // push thread into vector
        threads.push(child_thread);
    }

    // make sure to wait for all threads to complete
    for child_thread in threads {
        child_thread.join().unwrap();
    }

    // the lock shared state and print it in the main thread
    println!("Result: {}", *shared_state.lock().unwrap());
}